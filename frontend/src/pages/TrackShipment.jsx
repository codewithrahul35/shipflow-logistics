
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TrackShipment() {
  const navigate = useNavigate();

  const [searchId, setSearchId] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrackShipment = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first to track your shipment.");
      navigate("/login");
      return;
    }

    if (!searchId.trim()) {
      setError("Please enter a Tracking ID or Consignment ID");
      setTrackingData(null);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setTrackingData(null);

      const response = await axios.get(
        `http://localhost:5000/api/tracking/${searchId.trim()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setTrackingData(response.data);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        alert("Your session has expired. Please login again.");
        navigate("/login");
        return;
      }

      setError(
        err.response?.data?.message ||
        "Shipment not found"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 md:px-8">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-8">

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Track Shipment
          </h1>

          <p className="text-gray-500 mt-2">
            Track your shipment using Tracking ID or Consignment ID
          </p>

        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">

          <form
            onSubmit={handleTrackShipment}
            className="flex flex-col sm:flex-row gap-3"
          >

            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Enter Tracking ID or Consignment ID"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "Tracking..." : "Track Shipment"}
            </button>

          </form>

          {error && (
            <p className="text-red-600 mt-4">
              {error}
            </p>
          )}

        </div>

        {trackingData?.shipment && (
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mt-8">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Shipment Details
                </h2>

                <p className="text-gray-500 mt-1">
                  {trackingData.shipment.trackingId}
                </p>
              </div>

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold w-fit ${
                  trackingData.shipment.currentStatus === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : trackingData.shipment.currentStatus === "In Transit"
                    ? "bg-blue-100 text-blue-700"
                    : trackingData.shipment.currentStatus === "Pending"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {trackingData.shipment.currentStatus}
              </span>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              <div>
                <p className="text-sm text-gray-500">
                  Tracking ID
                </p>
                <p className="font-semibold text-gray-800 mt-1">
                  {trackingData.shipment.trackingId}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Consignment ID
                </p>
                <p className="font-semibold text-gray-800 mt-1">
                  {trackingData.shipment.consignmentId}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Booking Date
                </p>
                <p className="font-semibold text-gray-800 mt-1">
                  {trackingData.shipment.bookingDate
                    ? new Date(
                        trackingData.shipment.bookingDate
                      ).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Sender
                </p>
                <p className="font-semibold text-gray-800 mt-1">
                  {trackingData.shipment.senderName}
                </p>
                <p className="text-sm text-gray-500">
                  {trackingData.shipment.senderPhone}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Receiver
                </p>
                <p className="font-semibold text-gray-800 mt-1">
                  {trackingData.shipment.receiverName}
                </p>
                <p className="text-sm text-gray-500">
                  {trackingData.shipment.receiverPhone}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Route
                </p>
                <p className="font-semibold text-gray-800 mt-1">
                  {trackingData.shipment.origin} →{" "}
                  {trackingData.shipment.destination}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Total Boxes
                </p>
                <p className="font-semibold text-gray-800 mt-1">
                  {trackingData.shipment.totalBoxes}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Total Weight
                </p>
                <p className="font-semibold text-gray-800 mt-1">
                  {trackingData.shipment.totalWeight}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Payment Status
                </p>
                <p className="font-semibold text-gray-800 mt-1">
                  {trackingData.shipment.paymentStatus || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  COD Amount
                </p>
                <p className="font-semibold text-gray-800 mt-1">
                  {trackingData.shipment.codAmount ?? "N/A"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Expected Delivery
                </p>
                <p className="font-semibold text-gray-800 mt-1">
                  {trackingData.shipment.expectedDeliveryDate
                    ? new Date(
                        trackingData.shipment.expectedDeliveryDate
                      ).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Actual Delivery
                </p>
                <p className="font-semibold text-gray-800 mt-1">
                  {trackingData.shipment.actualDeliveryDate
                    ? new Date(
                        trackingData.shipment.actualDeliveryDate
                      ).toLocaleDateString()
                    : "Not delivered"}
                </p>
              </div>

            </div>

            <div className="mt-6">

              <p className="text-sm text-gray-500">
                Description
              </p>

              <p className="text-gray-800 mt-1">
                {trackingData.shipment.description || "No description"}
              </p>

            </div>

          </div>
        )}

        {trackingData && (
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mt-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tracking Timeline
            </h2>

            {trackingData.timeline?.length > 0 ? (
              <div className="space-y-5">

                {trackingData.timeline.map((event, index) => (

                  <div
                    key={event._id || index}
                    className="flex gap-4"
                  >

                    <div className="flex flex-col items-center">

                      <div className="w-4 h-4 bg-blue-600 rounded-full mt-1"></div>

                      {index !== trackingData.timeline.length - 1 && (
                        <div className="w-0.5 bg-blue-200 flex-1 mt-2"></div>
                      )}

                    </div>

                    <div className="pb-5">

                      <h3 className="font-semibold text-gray-800">
                        {event.status}
                      </h3>

                      {event.timestamp && (
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(
                            event.timestamp
                          ).toLocaleString()}
                        </p>
                      )}

                      {event.location && (
                        <p className="text-gray-600 mt-1">
                          Location: {event.location}
                        </p>
                      )}

                      {event.description && (
                        <p className="text-gray-500 mt-1">
                          {event.description}
                        </p>
                      )}

                    </div>

                  </div>

                ))}

              </div>
            ) : (
              <p className="text-gray-500">
                No tracking events available yet.
              </p>
            )}

          </div>
        )}

      </div>

    </div>
  );
}

export default TrackShipment;

