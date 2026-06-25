import Navbar from "./components/Navbar";
import CarGrid from "./components/CarGrid";

function App() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-600 text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Rent Your Dream Car</h1>

        <p className="text-lg text-gray-300">
          Browse and book from our premium fleet.
        </p>
      </section>

      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">All Cars</h2>

        <CarGrid />
      </div>
    </>
  );
}

export default App;
