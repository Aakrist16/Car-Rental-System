import { useEffect, useState } from "react";
import api from "../api/api";
import MyBookings from "../components/MyBookings";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await api.get("/bookings");
      setBookings(response.data);
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCancelBooking = async (bookingId) => {
    try {
      await api.delete(`/bookings/${bookingId}`);

      setBookings((prev) =>
        prev.filter((booking) => booking._id !== bookingId),
      );

      alert("Booking cancelled successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to cancel booking.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <MyBookings bookings={bookings} onCancelBooking={handleCancelBooking} />
    </div>
  );
}

export default Bookings;
