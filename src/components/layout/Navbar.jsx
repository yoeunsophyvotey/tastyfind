
import { NavLink } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiUser,
  FiMenu,
  FiX,
  FiMoon,
  FiSun,
} from "react-icons/fi";

import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;

      localStorage.setItem("darkMode", newMode);

      return newMode;
    });
  }

  const navClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-orange-500 font-bold"
        : "text-gray-700 dark:text-gray-300 hover:text-orange-500"
    }`;

  const iconClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-orange-500"
        : "text-gray-600 dark:text-gray-300 hover:text-orange-500"
    }`;

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            `text-2xl transition ${
              isActive
                ? "font-bold text-orange-500"
                : "font-bold text-orange-500"
            }`
          }
        >
          TastyFind
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/explore" className={navClass}>
            Explore
          </NavLink>

          <NavLink to="/cook" className={navClass}>
            What Can I Cook?
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun size={21} /> : <FiMoon size={21} />}
          </button>

          <NavLink to="/explore" className={iconClass}>
            <FiSearch size={21} />
          </NavLink>

          <NavLink to="/favorites" className={iconClass}>
            <FiHeart size={21} />
          </NavLink>

          <NavLink to="/profile" className={iconClass}>
            <FiUser size={21} />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-md">
          <div className="px-6 py-4 flex flex-col gap-5">

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/explore"
              onClick={() => setMenuOpen(false)}
              className={navClass}
            >
              Explore
            </NavLink>

            <NavLink
              to="/cook"
              onClick={() => setMenuOpen(false)}
              className={navClass}
            >
              What Can I Cook?
            </NavLink>

            <NavLink
              to="/favorites"
              onClick={() => setMenuOpen(false)}
              className={navClass}
            >
              Favorites
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={navClass}
            >
              About
            </NavLink>

            <div className="border-t border-gray-100 dark:border-gray-800 pt-4 flex flex-col gap-5">

              <NavLink
                to="/explore"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3"
              >
                {({ isActive }) => (
                  <>
                    <FiSearch
                      size={20}
                      className={
                        isActive
                          ? "text-orange-500"
                          : "text-gray-300"
                      }
                    />
                    <span
                      className={
                        isActive
                          ? "text-orange-500 font-bold"
                          : "text-gray-300"
                      }
                    >
                      Search
                    </span>
                  </>
                )}
              </NavLink>

              <NavLink
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3"
              >
                {({ isActive }) => (
                  <>
                    <FiUser
                      size={20}
                      className={
                        isActive
                          ? "text-orange-500"
                          : "text-gray-300"
                      }
                    />
                    <span
                      className={
                        isActive
                          ? "text-orange-500 font-bold"
                          : "text-gray-300"
                      }
                    >
                      Profile
                    </span>
                  </>
                )}
              </NavLink>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;