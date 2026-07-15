const express = require("express");

const router = express.Router();

const { getAllCars, addCar } = require("../controllers/carController");

// GET ALL CARS
router.get("/", getAllCars);

// ADD NEW CAR
router.post("/", addCar);

module.exports = router;
