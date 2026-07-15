function Dashboard({ cars }) {
  const totalCars = cars.length;

  const availableCars = cars.filter((car) => car.available).length;

  const rentedCars = cars.filter((car) => !car.available).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div className="bg-slate-800 text-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold">Total Cars</h3>

        <p className="text-4xl font-bold mt-2">{totalCars}</p>
      </div>

      <div className="bg-green-600 text-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold">Available Cars</h3>

        <p className="text-4xl font-bold mt-2">{availableCars}</p>
      </div>

      <div className="bg-red-600 text-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold">Rented Cars</h3>

        <p className="text-4xl font-bold mt-2">{rentedCars}</p>
      </div>
    </div>
  );
}

export default Dashboard;
