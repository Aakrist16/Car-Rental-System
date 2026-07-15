import Dashboard from "../components/Dashboard";
import FilterBar from "../components/FilterBar";
import CarGrid from "../components/CarGrid";

function Home({ cars, selectedFilter, setSelectedFilter, onBook }) {
  const filteredCars =
    selectedFilter === "All"
      ? cars
      : cars.filter((car) => car.type === selectedFilter);

  return (
    <>
      <section className="bg-slate-600 text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Rent Your Dream Car</h1>

        <p className="text-lg text-gray-300">
          Browse and book from our premium fleet.
        </p>
      </section>

      <div className="max-w-7xl mx-auto p-6">
        <Dashboard cars={cars} />

        <FilterBar
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        <h2 className="text-3xl font-bold mb-6">Available Fleet</h2>

        <CarGrid cars={filteredCars} onBook={onBook} />
      </div>
    </>
  );
}

export default Home;
