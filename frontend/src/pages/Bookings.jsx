import MyBookings from "../components/MyBookings";

function Bookings({ bookings, onCancelBooking }) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-10"></div>

      <MyBookings bookings={bookings} onCancelBooking={onCancelBooking} />
    </div>
  );
}

export default Bookings;
