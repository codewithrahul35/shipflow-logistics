const mongoose = require("mongoose");

const trackingEventSchema= new mongoose.Schema({
    trackingId:{
        type: String,
        required: true

    },

    consignmentId:{
        type: String,
        required: true
    },

    status:{
        type:String,
        required: true,
        enum:[
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
        ]
    },

    location:{
        type: String,
        requirec: true
    },

    description:{
        type: String
    },

    timestamp:{
        type: Date,
        default: Date.now
    }
},
{
    timestamps:true
});

const TrackingEvent =   mongoose.model(
    "TrackingEvent",
    trackingEventSchema
)
module.exports = TrackingEvent;