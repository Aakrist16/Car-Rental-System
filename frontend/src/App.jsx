import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import BookingModal from "./components/BookingModal";

import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Admin from "./pages/Admin";

import carsData from "./data/cars";

function App() {
  const [cars, setCars] = useState(carsData);

  const [bookings, setBookings] = useState([]);

  const [selectedFilter, setSelectedFilter] = useState("All");

  const [selectedCar, setSelectedCar] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleBook(car) {
    setSelectedCar(car);
    setIsModalOpen(true);
  }

  function handleConfirmBooking(bookingData) {
    setBookings((prev) => [...prev, bookingData]);

    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === bookingData.carId
          ? {
              ...car,
              available: false,
            }
          : car,
      ),
    );

    setIsModalOpen(false);
    setSelectedCar(null);

    alert("Booking Confirmed Successfully!");
  }

  function handleCancelBooking(carId) {
    setBookings((prevBookings) =>
      prevBookings.filter((booking) => booking.carId !== carId),
    );

    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === carId
          ? {
              ...car,
              available: true,
            }
          : car,
      ),
    );

    alert("Booking Cancelled Successfully!");
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cars={cars}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              onBook={handleBook}
            />
          }
        />

        <Route
          path="/bookings"
          element={
            <Bookings
              bookings={bookings}
              onCancelBooking={handleCancelBooking}
            />
          }
        />

        <Route path="/admin" element={<Admin />} />
      </Routes>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCar={selectedCar}
        onConfirmBooking={handleConfirmBooking}
      />
    </>
  );
}

export default App;
