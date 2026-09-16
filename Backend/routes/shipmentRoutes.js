const express= require("express");


const {createShipment,getShipments,getShipmentById,updateShipment,deleteShipment,getShipmentStatistics}= require("../controllers/shipmentController.js");

const validateShipment = require("../middleware/validation.js");
const protect = require("../middleware/authMiddleware.js")
const authorizeRoles = require("../middleware/roleMiddleware.js");

const router = express.Router();

router.post("/",protect, authorizeRoles("admin","operation"),validateShipment,createShipment);

router.get("/",getShipments);

router.get("/statistics", protect,authorizeRoles("admin", "operation"), getShipmentStatistics);

router.get("/:id",getShipmentById);

router.put("/:id", protect,authorizeRoles("admin", "operation"),updateShipment);

router.delete("/:id",protect,authorizeRoles("admin"),deleteShipment)


module.exports= router;