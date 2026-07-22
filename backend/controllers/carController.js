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

// GET single car by ID
const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({
        message: "Car not found",
      });
    }

    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch car",
      error: error.message,
    });
  }
};

// POST create new car
const createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body);

    res.status(201).json({
      message: "Car created successfully",
      car,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create car",
      error: error.message,
    });
  }
};

// PUT update car
const updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!car) {
      return res.status(404).json({
        message: "Car not found",
      });
    }

    res.status(200).json({
      message: "Car updated successfully",
      car,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update car",
      error: error.message,
    });
  }
};

// DELETE car
const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);

    if (!car) {
      return res.status(404).json({
        message: "Car not found",
      });
    }

    res.status(200).json({
      message: "Car deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete car",
      error: error.message,
    });
  }
};

module.exports = {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
