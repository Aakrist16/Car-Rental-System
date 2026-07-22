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
              key={booking._id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={`/${booking.car.image}`}
                  alt={booking.car.model}
                  className="w-full md:w-64 h-40 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h3 className="text-2xl font-bold">
                    {booking.car.brand} {booking.car.model}
                  </h3>

                  <p className="text-gray-500 mt-3">Customer</p>

                  <p className="font-semibold">{booking.customerName}</p>

                  <p className="text-gray-500 mt-2">{booking.customerEmail}</p>

                  <p className="mt-4">
                    <strong>Rental Period:</strong>
                  </p>

                  <p>{new Date(booking.startDate).toLocaleDateString()}</p>

                  <p>{new Date(booking.endDate).toLocaleDateString()}</p>

                  <div className="mt-5 flex flex-wrap gap-8">
                    <div>
                      <p className="text-gray-500">Total Price</p>

                      <p className="text-2xl font-bold text-green-600">
                        ${booking.totalPrice}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">Status</p>

                      <p className="font-bold">{booking.status}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onCancelBooking(booking._id)}
                    className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold"
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MyBookings;
