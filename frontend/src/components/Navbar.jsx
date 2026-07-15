import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = "px-4 py-2 rounded-lg transition duration-300";

  return (
    <nav className="bg-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}

        <NavLink to="/" className="text-2xl font-bold text-white">
          Sabko Gadi
        </NavLink>

        {/* Navigation */}

        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkStyle} ${
                  isActive
                    ? "bg-white text-slate-800"
                    : "text-white hover:bg-slate-700"
                }`
              }
            >
              Browse Cars
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/bookings"
              className={({ isActive }) =>
                `${linkStyle} ${
                  isActive
                    ? "bg-white text-slate-800"
                    : "text-white hover:bg-slate-700"
                }`
              }
            >
              My Bookings
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `${linkStyle} ${
                  isActive
                    ? "bg-white text-slate-800"
                    : "text-white hover:bg-slate-700"
                }`
              }
            >
              Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
