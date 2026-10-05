import {
  FiInstagram,
  FiFacebook,
  FiGithub,
} from "react-icons/fi";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block text-2xl font-bold text-orange-500 hover:text-orange-400 transition"
            >
              TastyFind
            </Link>

            <p className="text-gray-400 mt-4 max-w-md leading-7">
              Your simple place to discover delicious recipes, save your
              favorites, and find meals you can cook with what you already
              have.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition"
              >
                <FiInstagram size={17} />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition"
              >
                <FiFacebook size={17} />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition"
              >
                <FiGithub size={17} />
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

          {/* TastyFind */}
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
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © 2026 TastyFind. All rights reserved.
          </p>

          <p className="text-sm text-gray-600">
            Discover · Cook · Enjoy
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;