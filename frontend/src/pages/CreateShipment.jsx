import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

function CreateShipment() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    trackingId: "",
    consignmentId: "",
    bookingDate: "",
    senderName: "",
    senderPhone: "",
    receiverName: "",
    receiverPhone: "",
    origin: "",
    destination: "",
    totalBoxes: "",
    totalWeight: "",
    description: "",
    status: "Pending",
    expectedDeliveryDate: "",
    codAmount: "",
    paymentStatus: "Pending"
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [createdShipment, setCreatedShipment] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        name === "totalBoxes" ||
        name === "totalWeight" ||
        name === "codAmount"
          ? Number(value)
          : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!token) {
      setError("Please login to create a shipment.");
      return;
    }

    if (formData.totalBoxes <= 0) {
      setError("Total boxes must be greater than 0");
      return;
    }

    if (formData.totalWeight <= 0) {
      setError("Total weight must be greater than 0");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/shipments`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const shipment =
        response.data.shipment ||
        response.data.data ||
        response.data;

      setCreatedShipment(shipment);

      setMessage(
        response.data.message ||
        "Shipment created successfully"
      );
    } catch (err) {
      console.log("CREATE SHIPMENT ERROR:", err);
      console.log("BACKEND RESPONSE:", err.response?.data);

      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        alert("Your session has expired. Please login again.");
        navigate("/login");
        return;
      }

      setError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.message ||
        "Failed to create shipment"
      );
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  };

  const downloadPDF = () => {
    if (!createdShipment) return;

    const doc = new jsPDF();
    const shipment = createdShipment;

    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("SHIPFLOW", 105, 20, {
      align: "center"
    });

    doc.setFontSize(16);
    doc.text("Shipment Receipt", 105, 30, {
      align: "center"
    });

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    doc.text(
      `Generated on: ${new Date().toLocaleString("en-IN")}`,
      105,
      38,
      {
        align: "center"
      }
    );

    doc.line(15, 45, 195, 45);

    let y = 58;

    const addSection = (title) => {
      if (y > 260) {
        doc.addPage();
        y = 20;
      }

      doc.setFontSize(13);
      doc.setFont("helvetica", "bold");
      doc.text(title, 15, y);

      y += 8;
    };

    const addRow = (label, value) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }

      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text(`${label}:`, 15, y);

      doc.setFont("helvetica", "normal");

      const textValue = String(value ?? "N/A");
      const lines = doc.splitTextToSize(textValue, 120);

      doc.text(lines, 70, y);

      y += Math.max(7, lines.length * 5);
    };

    addSection("Shipment Information");

    addRow("Tracking ID", shipment.trackingId);
    addRow("Consignment ID", shipment.consignmentId);
    addRow("Booking Date", formatDate(shipment.bookingDate));
    addRow(
      "Status",
      shipment.status ||
        shipment.currentStatus ||
        "Pending"
    );
    addRow(
      "Expected Delivery",
      formatDate(shipment.expectedDeliveryDate)
    );
    addRow(
      "Actual Delivery",
      shipment.actualDeliveryDate
        ? formatDate(shipment.actualDeliveryDate)
        : "Not delivered"
    );

    y += 4;

    addSection("Sender Details");

    addRow("Name", shipment.senderName);
    addRow("Phone", shipment.senderPhone);

    y += 4;

    addSection("Receiver Details");

    addRow("Name", shipment.receiverName);
    addRow("Phone", shipment.receiverPhone);

    y += 4;

    addSection("Delivery Details");

    addRow("Origin", shipment.origin);
    addRow("Destination", shipment.destination);
    addRow("Total Boxes", shipment.totalBoxes);
    addRow("Total Weight", shipment.totalWeight);
    addRow(
      "Description",
      shipment.description || "N/A"
    );

    y += 4;

    addSection("Payment Details");

    addRow(
      "COD Amount",
      shipment.codAmount ?? "N/A"
    );

    addRow(
      "Payment Status",
      shipment.paymentStatus || "N/A"
    );

    y += 8;

    if (y > 270) {
      doc.addPage();
      y = 20;
    }

    doc.line(15, y, 195, y);

    y += 10;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    doc.text(
      "Thank you for using ShipFlow.",
      105,
      y,
      {
        align: "center"
      }
    );

    doc.save(
      `${shipment.trackingId || "shipment"}-receipt.pdf`
    );
  };

  const createAnotherShipment = () => {
    setCreatedShipment(null);
    setMessage("");
    setError("");

    setFormData({
      trackingId: "",
      consignmentId: "",
      bookingDate: "",
      senderName: "",
      senderPhone: "",
      receiverName: "",
      receiverPhone: "",
      origin: "",
      destination: "",
      totalBoxes: "",
      totalWeight: "",
      description: "",
      status: "Pending",
      expectedDeliveryDate: "",
      codAmount: "",
      paymentStatus: "Pending"
    });
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-xl shadow-sm text-center max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            Login Required
          </h1>

          <p className="text-gray-500 mb-6">
            Please login to create a shipment.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  if (createdShipment) {
    return (
      <div className="min-h-screen bg-gray-100 px-4 py-8 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                ✓
              </div>

              <h1 className="text-3xl font-bold text-gray-800">
                Shipment Created Successfully
              </h1>

              <p className="text-gray-500 mt-2">
                Your shipment has been saved successfully.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-5 mb-8 text-center">
              <p className="text-sm text-gray-500">
                Tracking ID
              </p>

              <p className="text-2xl font-bold text-blue-600 mt-1">
                {createdShipment.trackingId}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Consignment ID:{" "}
                {createdShipment.consignmentId}
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-5 py-4 border-b">
                <h2 className="text-xl font-bold text-gray-800">
                  Shipment Details
                </h2>
              </div>

              <div className="p-5 md:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-gray-500">
                      Tracking ID
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      {createdShipment.trackingId}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Consignment ID
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      {createdShipment.consignmentId}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Booking Date
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      {formatDate(
                        createdShipment.bookingDate
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Sender
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      {createdShipment.senderName}
                    </p>

                    <p className="text-sm text-gray-500">
                      {createdShipment.senderPhone}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Receiver
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      {createdShipment.receiverName}
                    </p>

                    <p className="text-sm text-gray-500">
                      {createdShipment.receiverPhone}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Route
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      {createdShipment.origin} →{" "}
                      {createdShipment.destination}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Total Boxes
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      {createdShipment.totalBoxes}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Total Weight
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      {createdShipment.totalWeight}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Status
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      {createdShipment.status ||
                        createdShipment.currentStatus ||
                        "Pending"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Expected Delivery
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      {formatDate(
                        createdShipment.expectedDeliveryDate
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      COD Amount
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      {createdShipment.codAmount ?? "N/A"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Payment Status
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      {createdShipment.paymentStatus ||
                        "N/A"}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-500">
                    Description
                  </p>

                  <p className="text-gray-800 mt-1">
                    {createdShipment.description ||
                      "No description"}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-500">
                    Actual Delivery Date
                  </p>

                  <p className="text-gray-800 font-semibold mt-1">
                    {createdShipment.actualDeliveryDate
                      ? formatDate(
                          createdShipment.actualDeliveryDate
                        )
                      : "Not delivered"}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
              <button
                onClick={downloadPDF}
                className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Download PDF
              </button>

              <button
                onClick={createAnotherShipment}
                className="border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Create Another Shipment
              </button>

              <button
                onClick={() => navigate("/shipments")}
                className="border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                View All Shipments
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Create Shipment
              </h1>

              <p className="text-gray-500 mt-1">
                Enter shipment details
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/shipments")}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Back
            </button>
          </div>

          {message && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
              {message}
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 mb-2">
                  Tracking ID
                </label>

                <input
                  type="text"
                  name="trackingId"
                  value={formData.trackingId}
                  onChange={handleChange}
                  placeholder="TRK100006"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Consignment ID
                </label>

                <input
                  type="text"
                  name="consignmentId"
                  value={formData.consignmentId}
                  onChange={handleChange}
                  placeholder="CON100006"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Booking Date
                </label>

                <input
                  type="date"
                  name="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Expected Delivery Date
                </label>

                <input
                  type="date"
                  name="expectedDeliveryDate"
                  value={formData.expectedDeliveryDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Sender Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleChange}
                  placeholder="Sender Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />

                <input
                  type="text"
                  name="senderPhone"
                  value={formData.senderPhone}
                  onChange={handleChange}
                  placeholder="Sender Phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Receiver Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="receiverName"
                  value={formData.receiverName}
                  onChange={handleChange}
                  placeholder="Receiver Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />

                <input
                  type="text"
                  name="receiverPhone"
                  value={formData.receiverPhone}
                  onChange={handleChange}
                  placeholder="Receiver Phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Shipment Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="origin"
                  value={formData.origin}
                  onChange={handleChange}
                  placeholder="Origin"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />

                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Destination"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />

                <input
                  type="number"
                  name="totalBoxes"
                  value={formData.totalBoxes}
                  onChange={handleChange}
                  placeholder="Total Boxes"
                  min="1"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />

                <input
                  type="number"
                  name="totalWeight"
                  value={formData.totalWeight}
                  onChange={handleChange}
                  placeholder="Total Weight"
                  min="1"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option value="Pending">Pending</option>
                  <option value="Booked">Booked</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Out for Delivery">
                    Out for Delivery
                  </option>
                </select>

                <select
                  name="paymentStatus"
                  value={formData.paymentStatus}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Failed">Failed</option>
                </select>

                <input
                  type="number"
                  name="codAmount"
                  value={formData.codAmount}
                  onChange={handleChange}
                  placeholder="COD Amount"
                  min="0"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Shipment description"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-5 outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading
                ? "Creating Shipment..."
                : "Create Shipment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateShipment;

