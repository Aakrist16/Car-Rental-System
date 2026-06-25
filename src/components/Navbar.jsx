function Navbar() {
  return (
    <nav className="bg-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Car Rental System</h1>

        <ul className="flex gap-6 font-medium">
          <li className="hover:text-blue-400 cursor-pointer">Browse Cars</li>

          <li className="hover:text-blue-400 cursor-pointer">My Bookings</li>

          <li className="hover:text-blue-400 cursor-pointer">Admin</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
