const express = require("express");
const router = express.Router();

const {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} = require("../controllers/carController");

// READ
router.get("/", getCars);
router.get("/:id", getCarById);

// CREATE
router.post("/", createCar);

// UPDATE
router.put("/:id", updateCar);

// DELETE
router.delete("/:id", deleteCar);

module.exports = router;
