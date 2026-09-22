const mongoose = require("mongoose");
const TrackingEvent = require("../models/TrackingEvent.js");
const Shipment = require("../models/shipment.js");
const {
    isValidStatusTransition
} = require("../utils/shipmentStatus.js");

const createTrackingEvent = async (req, res) => {
    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        const shipment = await Shipment.findOne({
            trackingId: req.body.trackingId,
            createdBy: req.user.id
        }).session(session);

        if (!shipment) {
            await session.abortTransaction();

            return res.status(404).json({
                success: false,
                message: "Shipment not found"
            });
        }

        if (shipment.consignmentId !== req.body.consignmentId) {
            await session.abortTransaction();

            return res.status(400).json({
                success: false,
                message: "Tracking ID and Consignment ID do not match"
            });
        }

        const existingEvent = await TrackingEvent.findOne({
            trackingId: req.body.trackingId,
            consignmentId: req.body.consignmentId,
            status: req.body.status,
            location: req.body.location
        }).session(session);

        if (existingEvent) {
            await session.abortTransaction();

            return res.status(409).json({
                success: false,
                message: "Duplicate tracking event already exists"
            });
        }

        const validTransition = isValidStatusTransition(
            shipment.status,
            req.body.status
        );

        if (!validTransition) {
            await session.abortTransaction();

            return res.status(400).json({
                success: false,
                message: `Invalid status transition from ${shipment.status} to ${req.body.status}`
            });
        }

        const trackingEvents = await TrackingEvent.create(
            [req.body],
            { session }
        );

        const trackingEvent = trackingEvents[0];

        shipment.status = req.body.status;

        if (req.body.status === "Delivered") {
            shipment.actualDeliveryDate = new Date();
        }

        await shipment.save({
            session
        });

        await session.commitTransaction();

        res.status(201).json({
            success: true,
            message: "Tracking event created successfully",
            trackingEvent,
            shipment
        });

    } catch (error) {
        await session.abortTransaction();

        res.status(500).json({
            success: false,
            message: "Failed to create tracking event",
            error: error.message
        });

    } finally {
        await session.endSession();
    }
};

const getTrackingEvents = async (req, res) => {
    try {
        const { trackingId } = req.params;

        const shipment = await Shipment.findOne({
            $and: [
                {
                    $or: [
                        { trackingId: trackingId },
                        { consignmentId: trackingId }
                    ]
                },
                {
                    createdBy: req.user.id
                }
            ]
        });

        if (!shipment) {
            return res.status(404).json({
                success: false,
                message: "Shipment not found"
            });
        }

        const trackingEvents = await TrackingEvent.find({
            trackingId: shipment.trackingId
        }).sort({
            timestamp: 1
        });

        res.status(200).json({
            success: true,
            shipment: {
                trackingId: shipment.trackingId,
                consignmentId: shipment.consignmentId,
                bookingDate: shipment.bookingDate,
                senderName: shipment.senderName,
                senderPhone: shipment.senderPhone,
                receiverName: shipment.receiverName,
                receiverPhone: shipment.receiverPhone,
                origin: shipment.origin,
                destination: shipment.destination,
                totalBoxes: shipment.totalBoxes,
                totalWeight: shipment.totalWeight,
                description: shipment.description,
                currentStatus: shipment.status,
                expectedDeliveryDate: shipment.expectedDeliveryDate,
                actualDeliveryDate: shipment.actualDeliveryDate,
                codAmount: shipment.codAmount,
                paymentStatus: shipment.paymentStatus
            },
            timeline: trackingEvents
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch tracking information",
            error: error.message
        });
    }
};

module.exports = {
    createTrackingEvent,
    getTrackingEvents
};

