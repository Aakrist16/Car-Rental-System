import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import api from "./api/api";

import Navbar from "./components/Navbar";
import BookingModal from "./components/BookingModal";

import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Admin from "./pages/Admin";

function App() {
  const [cars, setCars] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.error("Failed to fetch cars:", error);
      }
    };

    fetchCars();
  }, []);

  function handleBook(car) {
    setSelectedCar(car);
    setIsModalOpen(true);
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

        <Route path="/bookings" element={<Bookings />} />

        <Route path="/admin" element={<Admin />} />
      </Routes>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCar={selectedCar}
      />
    </>
  );
}

export default App;
