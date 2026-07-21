const Car = require("../models/Car");

// GET all cars
const getCars = async (req, res) => {
  try {
    const cars = await Car.find();

    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch cars",
      error: error.message,
    });
  }
};

module.exports = {
  getCars,
};
