const statusFlow = {
    "Booked": ["Pickup Assigned", "Cancelled"],
    "Pickup Assigned": ["Picked Up", "Cancelled"],
    "Picked Up": ["In Transit", "Failed Delivery"],
    "In Transit": ["At Hub", "Failed Delivery"],
    "At Hub": ["Out for Delivery", "In Transit"],
    "Out for Delivery": ["Delivered", "Failed Delivery"],
    "Delivered": [],
    "Cancelled": [],
    "Returned": [],
    "Failed Delivery": ["Returned", "Out for Delivery"]
};


const isValidStatusTransition = (currentStatus,newStatus)=>{
    return statusFlow[currentStatus]?.includes(newStatus);
};

module.exports ={
    isValidStatusTransition
}