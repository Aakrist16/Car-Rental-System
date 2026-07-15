const express = require("express");

const router = express.Router();

const {
  getAllBookings,
  createBooking,
  cancelBooking,
} = require("../controllers/bookingController");

router.get("/", getAllBookings);

router.post("/", createBooking);

router.put("/:id/cancel", cancelBooking);

module.exports = router;
