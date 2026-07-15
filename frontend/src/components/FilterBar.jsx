  function FilterBar({ selectedFilter, setSelectedFilter }) {
    const filters = ["All", "Sedan", "SUV", "Formula1"];

    return (
      <div className="flex flex-wrap gap-3 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
              selectedFilter === filter
                ? "bg-slate-800 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    );
  }

  export default FilterBar;
