function CarCard({ car, onBook }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <img
        src={`/${car.image}`}
        alt={car.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">
          {car.brand} {car.model}
        </h2>

        <p className="text-gray-600">{car.type}</p>

        <p className="text-blue-600 font-bold mt-2">${car.pricePerDay}/day</p>

        <span
          className={`inline-block mt-3 px-3 py-1 rounded-full text-white ${
            car.available ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {car.available ? "Available" : "Rented"}
        </span>

        {car.available && (
          <button
            onClick={() => onBook(car)}
            className="w-full mt-5 bg-slate-800 hover:bg-slate-600 text-white py-2 rounded-lg"
          >
            Book Now
          </button>
        )}
      </div>
    </div>
  );
}

export default CarCard;
