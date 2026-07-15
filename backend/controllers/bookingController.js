const bookings = require("../data/bookings");
const cars = require("../data/cars");

// GET ALL BOOKINGS

const getAllBookings = (req, res) => {
  res.status(200).json(bookings);
};

// CREATE BOOKING

const createBooking = (req, res) => {
  const { customerName, carId, startDate, endDate, totalDays, totalCost } =
    req.body;

  if (
    !customerName ||
    !carId ||
    !startDate ||
    !endDate ||
    !totalDays ||
    !totalCost
  ) {
    return res.status(400).json({
      message: "Please fill all required fields.",
    });
  }

  const car = cars.find((car) => car.id === carId);

  if (!car) {
    return res.status(404).json({
      message: "Car not found.",
    });
  }

  if (!car.available) {
    return res.status(400).json({
      message: "Car is already rented.",
    });
  }

  car.available = false;

  const newBooking = {
    id: bookings.length + 1,
    customerName,
    carId,
    startDate,
    endDate,
    totalDays,
    totalCost,
    status: "Booked",
  };

  bookings.push(newBooking);

  res.status(201).json({
    message: "Booking created successfully.",
    booking: newBooking,
  });
};

// CANCEL BOOKING

const cancelBooking = (req, res) => {
  const bookingId = Number(req.params.id);

  const booking = bookings.find((b) => b.id === bookingId);

  if (!booking) {
    return res.status(404).json({
      message: "Booking not found.",
    });
  }

  if (booking.status === "Cancelled") {
    return res.status(400).json({
      message: "Booking is already cancelled.",
    });
  }

  booking.status = "Cancelled";

  const car = cars.find((c) => c.id === booking.carId);

  if (car) {
    car.available = true;
  }

  res.status(200).json({
    message: "Booking cancelled successfully.",
    booking,
  });
};

module.exports = {
  getAllBookings,
  createBooking,
  cancelBooking,
};
