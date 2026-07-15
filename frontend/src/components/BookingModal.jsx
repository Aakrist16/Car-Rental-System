import { useEffect, useState } from "react";

function BookingModal({ isOpen, onClose, selectedCar, onConfirmBooking }) {
  const [customerName, setCustomerName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [totalDays, setTotalDays] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (startDate && endDate && selectedCar) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const difference = (end - start) / (1000 * 60 * 60 * 24);

      if (difference >= 0) {
        const days = difference + 1;

        setTotalDays(days);
        setTotalCost(days * selectedCar.dailyRate);
      } else {
        setTotalDays(0);
        setTotalCost(0);
      }
    } else {
      setTotalDays(0);
      setTotalCost(0);
    }
  }, [startDate, endDate, selectedCar]);

  useEffect(() => {
    if (isOpen) {
      setCustomerName("");
      setStartDate("");
      setEndDate("");
      setTotalDays(0);
      setTotalCost(0);
    }
  }, [isOpen]);

  if (!isOpen || !selectedCar) return null;

  function handleConfirmBooking() {
    if (!customerName.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!startDate || !endDate) {
      alert("Please select both dates.");
      return;
    }

    if (totalDays <= 0) {
      alert("Please select valid dates.");
      return;
    }

    onConfirmBooking({
      carId: selectedCar.id,
      carModel: selectedCar.model,
      customerName,
      startDate,
      endDate,
      totalDays,
      totalCost,
    });
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="relative bg-white w-full max-w-xl max-h-[90vh] rounded-2xl overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow hover:bg-red-500 hover:text-white transition text-2xl z-20"
        >
          ×
        </button>

        <img
          src={selectedCar.image}
          alt={selectedCar.model}
          className="w-full h-64 object-cover"
        />

        <div className="p-7">
          <h2 className="text-3xl font-bold text-slate-800">
            {selectedCar.model}
          </h2>

          <p className="text-gray-500 mt-1">{selectedCar.type}</p>

          <div className="mt-5 mb-8">
            <p className="uppercase text-xs tracking-widest text-gray-400">
              Starting From
            </p>

            <p className="text-4xl font-bold text-slate-800">
              ${selectedCar.dailyRate}
              <span className="text-lg font-normal text-gray-500">/day</span>
            </p>
          </div>

          <div className="mb-5">
            <label className="block font-semibold mb-2">Customer Name</label>

            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-slate-300"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block font-semibold mb-2">Start Date</label>

              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">End Date</label>

              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>
          </div>

          <div className="bg-gray-50 border rounded-2xl p-5 mb-7">
            <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>

            <div className="flex justify-between mb-3">
              <span className="text-gray-600">Rental Days</span>

              <span className="font-bold">{totalDays}</span>
            </div>

            <div className="border-t pt-3 flex justify-between">
              <span className="font-semibold">Total Cost</span>

              <span className="text-2xl font-bold text-green-600">
                ${totalCost}
              </span>
            </div>
          </div>

          <button
            onClick={handleConfirmBooking}
            className="w-full bg-slate-800 hover:bg-slate-700 text-white py-4 rounded-xl font-semibold transition"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
