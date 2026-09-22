import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Shipment() {
  const navigate = useNavigate();

  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [editingShipment, setEditingShipment] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [saving, setSaving] = useState(false);

  const fetchShipments = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first.");
        navigate("/login");
        return;
      }

      const response = await axios.get(
        "http://localhost:5000/api/shipments",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = response.data.shipments || response.data;

      setShipments(data);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        alert("Session expired. Please login again.");
        navigate("/login");
        return;
      }

      setError(
        err.response?.data?.message ||
        "Failed to fetch shipments"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShipments();
  }, []);

  const totalShipments = shipments.length;

  const inTransit = shipments.filter(
    (shipment) => shipment.status === "In Transit"
  ).length;

  const delivered = shipments.filter(
    (shipment) => shipment.status === "Delivered"
  ).length;

  const pending = shipments.filter(
    (shipment) => shipment.status === "Pending"
  ).length;

  const handleEdit = (shipment) => {
    setEditingShipment(shipment);

    setEditForm({
      senderName: shipment.senderName || "",
      senderPhone: shipment.senderPhone || "",
      receiverName: shipment.receiverName || "",
      receiverPhone: shipment.receiverPhone || "",
      origin: shipment.origin || "",
      destination: shipment.destination || "",
      totalBoxes: shipment.totalBoxes || "",
      totalWeight: shipment.totalWeight || "",
      description: shipment.description || "",
      expectedDeliveryDate: shipment.expectedDeliveryDate
        ? shipment.expectedDeliveryDate.split("T")[0]
        : "",
      codAmount: shipment.codAmount || 0,
      paymentStatus: shipment.paymentStatus || "Pending"
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;

    setEditForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");

      const token = localStorage.getItem("token");

      const response = await axios.put(
        `http://localhost:5000/api/shipments/${editingShipment._id}`,
        editForm,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const updatedShipment = response.data.shipment;

      setShipments((prev) =>
        prev.map((shipment) =>
          shipment._id === updatedShipment._id
            ? updatedShipment
            : shipment
        )
      );

      setEditingShipment(null);
      setEditForm({});

      alert("Shipment updated successfully");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Failed to update shipment"
      );
    } finally {
      setSaving(false);
    }
  };

  const getStatusClass = (status) => {
    if (status === "Delivered") {
      return "bg-green-100 text-green-700";
    }

    if (status === "In Transit") {
      return "bg-blue-100 text-blue-700";
    }

    if (status === "Pending") {
      return "bg-orange-100 text-orange-700";
    }

    if (status === "Booked") {
      return "bg-purple-100 text-purple-700";
    }

    if (status === "Picked Up") {
      return "bg-indigo-100 text-indigo-700";
    }

    if (status === "At Hub") {
      return "bg-yellow-100 text-yellow-700";
    }

    if (status === "Out for Delivery") {
      return "bg-cyan-100 text-cyan-700";
    }

    if (status === "Cancelled") {
      return "bg-red-100 text-red-700";
    }

    if (status === "Returned") {
      return "bg-gray-200 text-gray-700";
    }

    if (status === "Failed Delivery") {
      return "bg-red-100 text-red-700";
    }

    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Shipments
            </h1>

            <p className="text-gray-500 mt-1">
              Manage and track your shipments
            </p>
          </div>

          <button
            onClick={() => navigate("/createshipment")}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            + Create Shipment
          </button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <p className="text-gray-500">
              Total Shipments
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              {totalShipments}
            </h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <p className="text-gray-500">
              In Transit
            </p>

            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              {inTransit}
            </h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <p className="text-gray-500">
              Delivered
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-2">
              {delivered}
            </h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <p className="text-gray-500">
              Pending
            </p>

            <h2 className="text-3xl font-bold text-orange-500 mt-2">
              {pending}
            </h2>
          </div>

        </div>

        {loading && (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <p className="text-gray-500">
              Loading shipments...
            </p>
          </div>
        )}

        {error && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <p className="text-red-600">
              {error}
            </p>
          </div>
        )}

        {!loading && !error && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">

            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                Shipment Records
              </h2>
            </div>

            {shipments.length === 0 ? (
              <p className="text-gray-500 text-center py-10">
                No shipments to display
              </p>
            ) : (
              <div className="overflow-x-auto">

                <table className="w-full min-w-275">

                  <thead className="bg-gray-50">

                    <tr>

                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        Tracking ID
                      </th>

                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        Consignment ID
                      </th>

                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        Sender
                      </th>

                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        Receiver
                      </th>

                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        Origin
                      </th>

                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        Destination
                      </th>

                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        Status
                      </th>

                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        Action
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {shipments.map((shipment) => (

                      <tr
                        key={shipment._id}
                        className="border-t hover:bg-gray-50"
                      >

                        <td className="px-6 py-4 font-medium text-gray-800">
                          {shipment.trackingId}
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                          {shipment.consignmentId}
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                          {shipment.senderName}
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                          {shipment.receiverName}
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                          {shipment.origin}
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                          {shipment.destination}
                        </td>

                        <td className="px-6 py-4">

                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(
                              shipment.status
                            )}`}
                          >
                            {shipment.status}
                          </span>

                        </td>

                        <td className="px-6 py-4">

                          <button
                            onClick={() => handleEdit(shipment)}
                            className="text-blue-600 hover:text-blue-800 text-xl"
                            title="Edit Shipment"
                          >
                            ✏️
                          </button>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>
            )}

          </div>
        )}

      </div>

      {editingShipment && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

          <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">

            <div className="flex items-center justify-between p-6 border-b">

              <div>

                <h2 className="text-2xl font-bold text-gray-800">
                  Edit Shipment
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {editingShipment.trackingId}
                </p>

              </div>

              <button
                type="button"
                onClick={() => {
                  setEditingShipment(null);
                  setEditForm({});
                }}
                className="text-gray-500 hover:text-gray-800 text-2xl"
              >
                ×
              </button>

            </div>

            <form
              onSubmit={handleUpdate}
              className="p-6"
            >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sender Name
                  </label>

                  <input
                    type="text"
                    name="senderName"
                    value={editForm.senderName}
                    onChange={handleEditChange}
                    className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sender Phone
                  </label>

                  <input
                    type="text"
                    name="senderPhone"
                    value={editForm.senderPhone}
                    onChange={handleEditChange}
                    className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Receiver Name
                  </label>

                  <input
                    type="text"
                    name="receiverName"
                    value={editForm.receiverName}
                    onChange={handleEditChange}
                    className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Receiver Phone
                  </label>

                  <input
                    type="text"
                    name="receiverPhone"
                    value={editForm.receiverPhone}
                    onChange={handleEditChange}
                    className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Origin
                  </label>

                  <input
                    type="text"
                    name="origin"
                    value={editForm.origin}
                    onChange={handleEditChange}
                    className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Destination
                  </label>

                  <input
                    type="text"
                    name="destination"
                    value={editForm.destination}
                    onChange={handleEditChange}
                    className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Total Boxes
                  </label>

                  <input
                    type="number"
                    name="totalBoxes"
                    value={editForm.totalBoxes}
                    onChange={handleEditChange}
                    min="1"
                    className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Total Weight
                  </label>

                  <input
                    type="number"
                    name="totalWeight"
                    value={editForm.totalWeight}
                    onChange={handleEditChange}
                    min="0.01"
                    step="0.01"
                    className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expected Delivery Date
                  </label>

                  <input
                    type="date"
                    name="expectedDeliveryDate"
                    value={editForm.expectedDeliveryDate}
                    onChange={handleEditChange}
                    className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    COD Amount
                  </label>

                  <input
                    type="number"
                    name="codAmount"
                    value={editForm.codAmount}
                    onChange={handleEditChange}
                    min="0"
                    step="0.01"
                    className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Status
                  </label>

                  <select
                    name="paymentStatus"
                    value={editForm.paymentStatus}
                    onChange={handleEditChange}
                    className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >

                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Paid">
                      Paid
                    </option>

                    <option value="Failed">
                      Failed
                    </option>

                  </select>

                </div>

              </div>

              <div className="mt-5">

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>

                <textarea
                  name="description"
                  value={editForm.description}
                  onChange={handleEditChange}
                  rows="4"
                  className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">

                <button
                  type="button"
                  onClick={() => {
                    setEditingShipment(null);
                    setEditForm({});
                  }}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default Shipment;

