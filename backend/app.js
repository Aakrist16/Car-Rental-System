const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const carRoutes = require("./routes/carRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/cars", carRoutes);
app.use("/api/bookings", bookingRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Car Rental Backend API Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
