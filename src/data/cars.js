import corolla from "../assets/cars/corolla.jpg";
import civic from "../assets/cars/civic.jpg";
import creta from "../assets/cars/creta.jpg";
import seltos from "../assets/cars/seltos.jpg";
import urus from "../assets/cars/urus.jpg";

const cars = [
  {
    id: 1,
    model: "Toyota Corolla",
    type: "Sedan",
    dailyRate: 50,
    available: true,
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
    type: "SSUV",
    dailyRate: 500,
    available: false,
    image: urus,
  },
];

export default cars;
