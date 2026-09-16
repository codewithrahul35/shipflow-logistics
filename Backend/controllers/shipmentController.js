const Shipment= require("../models/shipment.js");

const createShipment = async(req,res)=>{
        try{
            const shipment = await Shipment.create(req.body);
            res.status(201).json({ success: true, message: "Shipment created successfully", shipment });
        } catch(error){
            res.status(500).json({
                success:false,
                message:"Failed to create shipment",
                error: error.message    
            })
            
        }
};

const getShipments = async(req,res)=>{
    try{
        const{status , trackingId,consignmentId,origin,destination,page,limit}= req.query;
        const currentPage = Number(page)||1;
        const itemsPerPage = Number(limit)||10;
        const skip = (currentPage-1)*itemsPerPage;


        const filter = {};

        if(status){
            filter.status=status;
        }

        if(trackingId){
            filter.trackingId= trackingId;
        }

        if(consignmentId){
            filter.consignmentId= consignmentId;
        }
        if(origin){
            filter.origin={
                $regex: origin,
                $options: "i"
            }
        }

        if(destination){
            filter.destination= {
                $regex: destination,
                $options:"i"
            }
        }

        const shipments = await Shipment.find(filter)
            .skip(skip)
            .limit(itemsPerPage);

        const totalShipments = await Shipment.countDocuments(filter);
        const totalPages = Math.ceil(totalShipments / itemsPerPage);

        res.status(200).json({
            success: true,
            count: shipments.length,
            totalShipments,
            currentPage,
            itemsPerPage,
            totalPages,
            shipments
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to fetch shipments",
            error: error.message
        })
    }
};

const getShipmentById = async (req,res)=>{
    try{
        const shipment = await Shipment.findById(req.params.id);

        if(!shipment){
            return res.status(404).json({
                success: false,
                message: "shipment not found"
            });
        }
        res.status(200).json({
            success: true,
            shipment
        });

    }catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to fetch shipment"
        })
    }
}

const updateShipment = async(req,res)=>{
    try{

        if (req.body.status) {
            return res.status(400).json({
                success: false,
                message: "Status cannot be updated directly. Create a tracking event instead."
            });
        }
        
        const shipment = await Shipment.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true

            }
        );
        if(!shipment){
            return res.status(404).json({
                success: false,
                message:"shipment not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "shipmet updates successfully",
            shipment
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message:" Failed to update shipment",
            error: error.message
        })
    }
}

const deleteShipment = async(req,res)=>{
    try{
        const shipment = await Shipment.findByIdAndDelete(req.params.id);
        if(!shipment){
            return res.status(404).json({
                success: false,
                message: "shipment not found"
            })
        }

        res.status(200).json({
            success: true,
            message:"shipment deleted successfully"

        })
    }catch(error){
        return res.status(505).json({
            success: false,
            message: "failed to delete shipment",
            error: error.message
        })
    }
}

const getShipmentStatistics = async (req, res) => {
    try {
        const now = new Date();
        const startOfDay= new Date(now);
        startOfDay.setHours(0,0,0,0);

        const endOfDay = new Date(startOfDay);
        endOfDay.setDate(endOfDay.getDate()+1)

        const startOfMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            1
        );

        const endOfMonth = new Date(
            now.getFullYear(),
            now.getMonth() + 1,
           1
        );

        const statistics = await Shipment.aggregate([
            {
                $group: {
                    _id: "$status",
                    count: {
                        $sum: 1
                    }
                }
            }
        ]);
        const todayShipments = await Shipment.countDocuments({
         createdAt: {
        $gte: startOfDay,
        $lt: endOfDay
         }
        });

        const monthShipments = await Shipment.countDocuments({
                createdAt: {
                    $gte: startOfMonth,
                    $lt: endOfMonth
                }
            });

        const deliveredToday = await Shipment.countDocuments({
                actualDeliveryDate: {
                    $gte: startOfDay,
                    $lt: endOfDay
                }
            });

        const codStatistics= await Shipment.aggregate([
            {
                $group:{
                    _id: null,
                    totalCOD:{
                        $sum: "$codAmount"
                    }
                }
            }
        ])

        const totalCOD= codStatistics[0]?.totalCOD||0;
        const paidCODStatistics = await Shipment.aggregate([
            {
                $match: {
                    paymentStatus: "Paid"
                }
            },
            {
                $group: {
                    _id: null,
                    paidCOD: {
                        $sum: "$codAmount"
                    }
                }
            }
        ]);

        const paidCOD = paidCODStatistics[0]?.paidCOD || 0;
                const pendingCODStatistics = await Shipment.aggregate([
                {
                    $match: {
                        paymentStatus: "Pending"
                    }
                },
                {
                    $group: {
                        _id: null,
                        pendingCOD: {
                            $sum: "$codAmount"
                        }
                    }
                }
            ]);

        const pendingCOD = pendingCODStatistics[0]?.pendingCOD || 0;
        const deliveryPerformance = await Shipment.aggregate([
            {
                $match: {
                    status: "Delivered"
                }
            },
            {
                $project: {
                    expectedDeliveryDate: 1,
                    actualDeliveryDate: 1,

                    deliveryPerformance: {
                        $cond: [
                            {
                                $lte: [
                                    "$actualDeliveryDate",
                                    "$expectedDeliveryDate"
                                ]
                            },
                            "On Time",
                            "Delayed"
                        ]
                    }
                }
            },
            {
                $group: {
                    _id: "$deliveryPerformance",
                    count: {
                        $sum: 1
                    }
                }
            }
        ]);

        const onTimeDeliveries = deliveryPerformance.find(
            (item) => item._id === "On Time"
        )?.count || 0;

        const delayedDeliveries = deliveryPerformance.find(
            (item) => item._id === "Delayed"
        )?.count || 0;

        


        const totalShipments = statistics.reduce(
          (total, item) => total + item.count,
                         0
                            );

        const statusCounts = {}; 
        statistics.forEach((item) => { 
            statusCounts[item._id] = item.count; 
        });


const dashboardStatistics = {
     totalShipments, booked: statusCounts["Booked"] || 0, 
    pickupAssigned: statusCounts["Pickup Assigned"] || 0, 
    pickedUp: statusCounts["Picked Up"] || 0, 
    inTransit: statusCounts["In Transit"] || 0, 
    atHub: statusCounts["At Hub"] || 0, 
    outForDelivery: statusCounts["Out for Delivery"] || 0, 
    delivered: statusCounts["Delivered"] || 0, 
    cancelled: statusCounts["Cancelled"] || 0, 
    returned: statusCounts["Returned"] || 0, 
    failedDelivery: statusCounts["Failed Delivery"] || 0 
}; 
    res.status(200).json({ 
        success: true, 
        statistics: dashboardStatistics,
        todayShipments,
        monthShipments,
        deliveredToday,
        totalCOD,
        paidCOD,
        pendingCOD,
        onTimeDeliveries,
        delayedDeliveries
    
    });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to fetch shipment statistics",
            error: error.message
        });

    }
};


module.exports = {
    createShipment,
    getShipments,
    getShipmentById,
    updateShipment,
    deleteShipment,
    getShipmentStatistics
};