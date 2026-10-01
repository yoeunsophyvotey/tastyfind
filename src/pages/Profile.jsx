import {
  FiUser,
  FiHeart,
  FiSearch,
  FiArrowRight,
  FiClock,
} from "react-icons/fi";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoriteContext";

function Profile() {
  const { favorites } = useFavorites();

  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
  const updateRecentlyViewed = () => {
    const saved = JSON.parse(
      localStorage.getItem("recentlyViewed") || "[]"
    );

    setRecentlyViewed(saved);
  };

  updateRecentlyViewed();

  window.addEventListener("recentlyViewedUpdated", updateRecentlyViewed);

  return () => {
    window.removeEventListener(
      "recentlyViewedUpdated",
      updateRecentlyViewed
    );
  };
}, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Profile Hero */}
      <section className="relative overflow-hidden bg-orange-50 dark:bg-gray-900">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange-200/40 dark:bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-orange-100/60 dark:bg-orange-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/20">
                <FiUser size={48} />
              </div>

              <div className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md">
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="text-orange-500 font-semibold tracking-wide">
                YOUR TASTYFIND SPACE
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
                Welcome back, Chef! 👋
              </h1>

              <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl">
                Keep your favorite recipes close, discover new meals, and
                find something delicious to cook.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-500/10 text-red-500 flex items-center justify-center">
              <FiHeart size={22} />
            </div>

            <p className="text-gray-500 dark:text-gray-400 mt-4">
              Favorite Recipes
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
              {favorites.length}
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center">
              <FiSearch size={22} />
            </div>

            <p className="text-gray-500 dark:text-gray-400 mt-4">
              Discover Recipes
            </p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
              Explore
            </h2>
          </div>

          <Link
            to="/#recently-viewed"
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition"
          >
            <div className="w-11 h-11 rounded-xl bg-green-50 dark:bg-green-500/10 text-green-500 flex items-center justify-center">
              <FiClock size={22} />
            </div>

            <p className="text-gray-500 dark:text-gray-400 mt-4">
              Recently Viewed
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
              {recentlyViewed.length}
            </h2>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Favorites */}
        <div>
          <div className="flex items-end justify-between mb-7">
            <div>
              <p className="text-orange-500 font-semibold tracking-wide">
                YOUR COLLECTION
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                Favorite Recipes
              </h2>

              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Recipes you've saved and want to try again.
              </p>
            </div>

            {favorites.length > 0 && (
              <Link
                to="/favorites"
                className="hidden sm:flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition"
              >
                View All
                <FiArrowRight size={18} />
              </Link>
            )}
          </div>

          {favorites.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-10 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-50 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <FiHeart size={28} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-5">
                Your collection is empty
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md mx-auto">
                Start exploring recipes and save the ones that look delicious.
              </p>

              <Link
                to="/explore"
                className="inline-flex items-center gap-2 mt-6 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
              >
                Explore Recipes
                <FiArrowRight size={18} />
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {favorites.slice(0, 4).map((meal) => (
                  <Link
                    key={meal.idMeal}
                    to={`/recipe/${meal.idMeal}`}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                      />

                      <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center text-red-500">
                        <FiHeart size={17} fill="currentColor" />
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-1">
                        {meal.strMeal}
                      </h3>

                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {meal.strCategory || "Recipe"}
                      </p>

                      <p className="text-orange-500 font-semibold mt-4">
                        View Recipe →
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                to="/favorites"
                className="sm:hidden flex items-center justify-center gap-2 mt-6 text-orange-500 font-semibold"
              >
                View All Favorites
                <FiArrowRight size={18} />
              </Link>
            </>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-16">
          <div className="mb-7">
            <p className="text-orange-500 font-semibold tracking-wide">
              QUICK ACTIONS
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
              What are you in the mood for?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/explore"
              className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-7 hover:shadow-xl transition"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center">
                  <FiSearch size={24} />
                </div>

                <FiArrowRight
                  size={22}
                  className="text-gray-300 dark:text-gray-600 group-hover:text-orange-500 group-hover:translate-x-1 transition"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6">
                Discover Something New
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Explore recipes and find your next favorite meal.
              </p>
            </Link>

            <Link
              to="/cook"
              className="group bg-orange-500 rounded-3xl p-7 text-white hover:bg-orange-600 transition"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                  <span className="text-2xl">🥕</span>
                </div>

                <FiArrowRight
                  size={22}
                  className="group-hover:translate-x-1 transition"
                />
              </div>

              <h3 className="text-xl font-bold mt-6">
                What Can I Cook?
              </h3>

              <p className="text-orange-100 mt-2">
                Tell us what ingredients you have and discover recipes you
                can make right now.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;