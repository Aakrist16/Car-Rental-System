function CarCard({ car }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">{car.model}</h2>

        <p className="text-gray-600">Type: {car.type}</p>

        <p className="text-gray-600">Daily Rate: ${car.dailyRate}/day</p>

        <span
          className={`inline-block mt-3 px-3 py-1 rounded-full text-white text-sm ${
            car.available
              ? "bg-green-500 hover:bg-green-400 hover:text-black"
              : "bg-red-500"
          }`}
        >
          {car.available ? "Available" : "Rented"}
        </span>
      </div>
    </div>
  );
}

export default CarCard;
