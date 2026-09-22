const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db.js")

const app = express();

connectDB();

app.use(cors({
     origin: "https://shipflow-logistics.vercel.app",
    credentials: true
}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        message:"API is running",
    })
});

const shipmentRoutes = require("./routes/shipmentRoutes.js");
const trackingRoutes = require("./routes/trackingRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const errorHandler = require("./middleware/errorMiddleware.js");

app.use("/api/shipments",shipmentRoutes);
app.use("/api/tracking",trackingRoutes);
app.use("/api/auth",authRoutes);
app.use(errorHandler);

const PORT = process.env.PORT|| 5000;

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`server is running ${PORT}`)
});
