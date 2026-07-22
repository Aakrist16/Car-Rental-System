const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const Car = require("./models/Car");

dotenv.config();

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
    image: "cars/corolla.jpg",
  },
  {
    name: "Honda Civic",
    brand: "Honda",
    model: "Civic",
    type: "Sedan",
    year: 2024,
    pricePerDay: 55,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    available: false,
    image: "cars/civic.jpg",
  },
  {
    name: "Hyundai Creta",
    brand: "Hyundai",
    model: "Creta",
    type: "SUV",
    year: 2023,
    pricePerDay: 70,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    available: true,
    image: "cars/creta.jpg",
  },
  {
    name: "Kia Seltos",
    brand: "Kia",
    model: "Seltos",
    type: "SUV",
    year: 2024,
    pricePerDay: 75,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    available: true,
    image: "cars/seltos.jpg",
  },
  {
    name: "Lamborghini Urus SE",
    brand: "Lamborghini",
    model: "Urus SE",
    type: "SUV",
    year: 2025,
    pricePerDay: 500,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    available: false,
    image: "cars/urus.jpg",
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
    image: "cars/redbull.jpg",
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
    image: "cars/mclaren.jpg",
  },
];

const seedData = async () => {
  try {
    await connectDB();

    await Car.deleteMany();

    await Car.insertMany(cars);

    console.log("Cars seeded successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error(error);
    mongoose.connection.close();
  }
};

seedData();
