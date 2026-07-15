const cars = require("../data/cars");

// GET ALL CARS

const getAllCars = (req, res) => {
  res.status(200).json(cars);
};

// ADD NEW CAR

const addCar = (req, res) => {
  const { model, type, dailyRate, available, plateNumber } = req.body;

  if (!model || !type || !dailyRate || !plateNumber) {
    return res.status(400).json({
      message: "Please fill all required fields.",
    });
  }

  const newCar = {
    id: cars.length + 1,
    model,
    type,
    dailyRate,
    available,
    plateNumber,
  };

  cars.push(newCar);

  res.status(201).json({
    message: "Car added successfully.",
    car: newCar,
  });
};

module.exports = {
  getAllCars,
  addCar,
};
