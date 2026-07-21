const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dns = require("node:dns");

dotenv.config();

// Fix DNS issue for MongoDB Atlas
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const Car = require("./models/Car");

const cars = [
  {
    name: "Toyota Corolla",
    brand: "Toyota",
    model: "Corolla",
    type: "Sedan",
    year: 2023,
    pricePerDay: 50,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    available: false,
    image: "corolla.jpg",
  },
  {
    name: "Honda Civic",
    brand: "Honda",
    model: "Civic",
    type: "Sedan",
    year: 2023,
    pricePerDay: 55,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    available: false,
    image: "civic.jpg",
  },
  {
    name: "Hyundai Creta",
    brand: "Hyundai",
    model: "Creta",
    type: "SUV",
    year: 2024,
    pricePerDay: 70,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    available: true,
    image: "creta.jpg",
  },
  {
    name: "Kia Seltos",
    brand: "Kia",
    model: "Seltos",
    type: "SUV",
    year: 2024,
    pricePerDay: 75,
    fuelType: "Diesel",
    transmission: "Automatic",
    seats: 5,
    available: true,
    image: "seltos.jpg",
  },
  {
    name: "Lamborghini Urus SE",
    brand: "Lamborghini",
    model: "Urus SE",
    type: "SUV",
    year: 2024,
    pricePerDay: 500,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    available: false,
    image: "urus.jpg",
  },
  {
    name: "Formula 1 - Red Bull",
    brand: "Red Bull Racing",
    model: "RB20",
    type: "Formula1",
    year: 2024,
    pricePerDay: 500000,
    fuelType: "Hybrid",
    transmission: "Sequential",
    seats: 1,
    available: true,
    image: "redbull.jpg",
  },
  {
    name: "Formula 1 - McLaren",
    brand: "McLaren",
    model: "MCL38",
    type: "Formula1",
    year: 2024,
    pricePerDay: 500000,
    fuelType: "Hybrid",
    transmission: "Sequential",
    seats: 1,
    available: true,
    image: "mclaren.jpg",
  },
];

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB Connected");

    // Delete existing cars
    await Car.deleteMany();

    // Insert new cars
    await Car.insertMany(cars);

    console.log("Cars Inserted Successfully!");
    process.exit();
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

importData();
