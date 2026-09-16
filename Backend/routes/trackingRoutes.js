const express = require("express");

const {createTrackingEvent,getTrackingEvents} = require("../controllers/trackingController.js");
const protect = require("../middleware/authMiddleware.js")
const authorizeRoles = require("../middleware/roleMiddleware.js");

const router  = express.Router();

router.post("/",protect,authorizeRoles("admin","operation","delivery"),createTrackingEvent);

router.get("/:trackingId",protect,getTrackingEvents)

module.exports = router;