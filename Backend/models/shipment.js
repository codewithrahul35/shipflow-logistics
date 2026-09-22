const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
    trackingId: {
        type: String,
        required: true,
        unique: true
    },

    consignmentId: {
        type: String,
        required: true,
        unique: true
    },

    bookingDate: {
        type: Date,
        required: true
    },

    senderName: {
        type: String,
        required: true
    },

    senderPhone: {
        type: String,
        required: true,
        match: /^[6-9]\d{9}$/
    },

    receiverName: {
        type: String,
        required: true
    },

    receiverPhone: {
        type: String,
        required: true,
        match: /^[6-9]\d{9}$/
    },

    origin: {
        type: String,
        required: true
    },

    destination: {
        type: String,
        required: true
    },

    totalBoxes: {
        type: Number,
        required: true,
        min: 1
    },

    totalWeight: {
        type: Number,
        required: true,
        min: 0.01
    },

    description: {
        type: String
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        enum: [
            "Pending",
            "Booked",
            "Pickup Assigned",
            "Picked Up",
            "In Transit",
            "At Hub",
            "Out for Delivery",
            "Delivered",
            "Cancelled",
            "Returned",
            "Failed Delivery"
        ],
        default: "Pending"
    },

    expectedDeliveryDate: {
        type: Date
    },

    actualDeliveryDate: {
        type: Date
    },

    codAmount: {
        type: Number,
        default: 0,
        min: 0
    },

    paymentStatus: {
        type: String,
        enum: ["Pending", "Paid", "Failed"],
        default: "Pending"
    }
}, {
    timestamps: true
});
const Shipment = mongoose.model("Shipment", shipmentSchema);
module.exports = Shipment;