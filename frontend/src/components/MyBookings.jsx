function MyBookings({ bookings, onCancelBooking }) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">My Bookings</h2>

      {bookings.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-700">
            No Bookings Yet
          </h3>

          <p className="text-gray-500 mt-2">
            Book your first car to see it here.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking.carId}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {booking.carModel}
                  </h3>

                  <p className="text-gray-500 mt-4">Customer</p>

                  <p className="font-semibold text-slate-800">
                    {booking.customerName}
                  </p>
                </div>

                <div className="text-left md:text-right">
                  <p className="text-gray-500">Rental Period</p>

                  <p className="font-semibold">{booking.startDate}</p>

                  <p className="font-semibold">{booking.endDate}</p>
                </div>
              </div>

              <div className="border-t mt-6 pt-6 flex flex-col md:flex-row justify-between items-center gap-5">
                <div className="flex gap-12">
                  <div>
                    <p className="text-gray-500">Rental Days</p>

                    <p className="text-xl font-bold text-slate-800">
                      {booking.totalDays}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">Total Cost</p>

                    <p className="text-2xl font-bold text-green-600">
                      ${booking.totalCost}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onCancelBooking(booking.carId)}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MyBookings;
