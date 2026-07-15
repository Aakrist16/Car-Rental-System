import corolla from "../assets/cars/corolla.jpg";
import civic from "../assets/cars/civic.jpg";
import creta from "../assets/cars/creta.jpg";
import seltos from "../assets/cars/seltos.jpg";
import urus from "../assets/cars/urus.jpg";
import redbull from "../assets/cars/redbull.jpg";
import mclaren from "../assets/cars/mclaren.jpg";

const cars = [
  {
    id: 1,
    model: "Toyota Corolla",
    type: "Sedan",
    dailyRate: 50,
    available: false,
    image: corolla,
  },
  {
    id: 2,
    model: "Honda Civic",
    type: "Sedan",
    dailyRate: 55,
    available: false,
    image: civic,
  },
  {
    id: 3,
    model: "Hyundai Creta",
    type: "SUV",
    dailyRate: 70,
    available: true,
    image: creta,
  },
  {
    id: 4,
    model: "Kia Seltos",
    type: "SUV",
    dailyRate: 75,
    available: true,
    image: seltos,
  },
  {
    id: 5,
    model: "Lamborghini Urus SE",
    type: "SUV",
    dailyRate: 500,
    available: false,
    image: urus,
  },
  {
    id: 6,
    model: "Formula 1 - RedBull",
    type: "Formula1",
    dailyRate: 500000,
    available: true,
    image: redbull,
  },
  {
    id: 7,
    model: "Formula 1 - McLaren",
    type: "Formula1",
    dailyRate: 500000,
    available: true,
    image: mclaren,
  },
];

export default cars;
