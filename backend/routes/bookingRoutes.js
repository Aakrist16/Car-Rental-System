const express = require("express");
const router = express.Router();

const {
  getBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

// READ
router.get("/", getBookings);
router.get("/:id", getBookingById);

// CREATE
router.post("/", createBooking);

// UPDATE
router.put("/:id", updateBooking);

// DELETE
router.delete("/:id", deleteBooking);

module.exports = router;
