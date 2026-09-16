const validateShipment = (req, res, next) => {

    const {
        trackingId,
        consignmentId,
        bookingDate,
        expectedDeliveryDate,
        senderName,
        senderPhone,
        receiverName,
        receiverPhone,
        origin,
        destination,
        totalBoxes,
        totalWeight,
        codAmount
    } = req.body;


    // ==============================
    // TRACKING ID
    // ==============================

    if (!trackingId) {
        return res.status(400).json({
            success: false,
            message: "Tracking ID is required"
        });
    }


    // ==============================
    // CONSIGNMENT ID
    // ==============================

    if (!consignmentId) {
        return res.status(400).json({
            success: false,
            message: "Consignment ID is required"
        });
    }


    // ==============================
    // BOOKING DATE
    // ==============================

    if (!bookingDate) {
        return res.status(400).json({
            success: false,
            message: "Booking date is required"
        });
    }

    const parsedBookingDate = new Date(bookingDate);

    if (Number.isNaN(parsedBookingDate.getTime())) {
        return res.status(400).json({
            success: false,
            message: "Booking date must be a valid date"
        });
    }


    // ==============================
    // EXPECTED DELIVERY DATE
    // ==============================

    if (expectedDeliveryDate !== undefined) {

        const parsedExpectedDeliveryDate =
            new Date(expectedDeliveryDate);

        if (Number.isNaN(parsedExpectedDeliveryDate.getTime())) {
            return res.status(400).json({
                success: false,
                message: "Expected delivery date must be a valid date"
            });
        }


        // Expected delivery cannot be before booking date

        if (parsedExpectedDeliveryDate < parsedBookingDate) {
            return res.status(400).json({
                success: false,
                message: "Expected delivery date cannot be before booking date"
            });
        }
    }


    // ==============================
    // SENDER NAME
    // ==============================

    if (!senderName) {
        return res.status(400).json({
            success: false,
            message: "Sender name is required"
        });
    }


    // ==============================
    // SENDER PHONE
    // ==============================

    if (!senderPhone) {
        return res.status(400).json({
            success: false,
            message: "Sender phone is required"
        });
    }

    if (!/^[6-9]\d{9}$/.test(senderPhone)) {
        return res.status(400).json({
            success: false,
            message: "Sender phone must be a valid 10-digit Indian mobile number"
        });
    }


    // ==============================
    // RECEIVER NAME
    // ==============================

    if (!receiverName) {
        return res.status(400).json({
            success: false,
            message: "Receiver name is required"
        });
    }


    // ==============================
    // RECEIVER PHONE
    // ==============================

    if (!receiverPhone) {
        return res.status(400).json({
            success: false,
            message: "Receiver phone is required"
        });
    }

    if (!/^[6-9]\d{9}$/.test(receiverPhone)) {
        return res.status(400).json({
            success: false,
            message: "Receiver phone must be a valid 10-digit Indian mobile number"
        });
    }


    // ==============================
    // ORIGIN
    // ==============================

    if (!origin) {
        return res.status(400).json({
            success: false,
            message: "Origin is required"
        });
    }


    // ==============================
    // DESTINATION
    // ==============================

    if (!destination) {
        return res.status(400).json({
            success: false,
            message: "Destination is required"
        });
    }


    // ==============================
    // TOTAL BOXES
    // ==============================

    if (totalBoxes === undefined) {
        return res.status(400).json({
            success: false,
            message: "Total boxes is required"
        });
    }

    if (
        typeof totalBoxes !== "number" ||
        !Number.isFinite(totalBoxes) ||
        totalBoxes < 1
    ) {
        return res.status(400).json({
            success: false,
            message: "Total boxes must be a valid number greater than 0"
        });
    }


    // ==============================
    // TOTAL WEIGHT
    // ==============================

    if (totalWeight === undefined) {
        return res.status(400).json({
            success: false,
            message: "Total weight is required"
        });
    }

    if (
        typeof totalWeight !== "number" ||
        !Number.isFinite(totalWeight) ||
        totalWeight <= 0
    ) {
        return res.status(400).json({
            success: false,
            message: "Total weight must be a valid number greater than 0"
        });
    }


    // ==============================
    // COD AMOUNT
    // ==============================

    if (
        codAmount !== undefined &&
        (
            typeof codAmount !== "number" ||
            !Number.isFinite(codAmount) ||
            codAmount < 0
        )
    ) {
        return res.status(400).json({
            success: false,
            message: "COD amount must be a valid number greater than or equal to 0"
        });
    }


    // ==============================
    // EVERYTHING IS VALID
    // ==============================

    next();
};


module.exports = validateShipment;