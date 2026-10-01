import {
  FiInstagram,
  FiFacebook,
  FiGithub,
  FiArrowRight,
} from "react-icons/fi";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white mt-0">
      

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block text-2xl font-bold text-orange-500 hover:text-orange-400 transition"
            >
              TastyFind 🍴
            </Link>

            <p className="text-gray-400 mt-4 max-w-md leading-7">
              Your simple place to discover delicious recipes, save your
              favorites, and find meals you can cook with what you already
              have.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition"
              >
                <FiInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition"
              >
                <FiFacebook size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition"
              >
                <FiGithub size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-white mb-5">
              Explore
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                Home
              </Link>

              <Link
                to="/explore"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                Explore Recipes
              </Link>

              <Link
                to="/cook"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                What Can I Cook?
              </Link>

              <Link
                to="/favorites"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                Favorites
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-5">
              TastyFind
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/about"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                About Us
              </Link>

              <Link
                to="/profile"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                My Profile
              </Link>

              <Link
                to="/favorites"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                Saved Recipes
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 TastyFind. All rights reserved.
          </p>

          <p className="text-sm text-gray-600">
            Discover · Cook · Enjoy 🍊
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;