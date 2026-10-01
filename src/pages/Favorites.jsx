import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { useFavorites } from "../context/FavoriteContext";

function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center">
          <p className="text-orange-500 font-semibold">
            YOUR SAVED RECIPES
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            My Favorites
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Keep your favorite recipes in one place.
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-20">
            <FiHeart
              size={50}
              className="mx-auto text-gray-300"
            />

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-5">
              No favorites yet
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Start exploring recipes and save the ones you love.
            </p>

            <Link
              to="/explore"
              className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Explore Recipes
            </Link>
          </div>
        ) : (
          <div className="mt-12">

            <p className="text-gray-500 dark:text-gray-400 mb-6">
              {favorites.length} saved recipe
              {favorites.length !== 1 ? "s" : ""}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {favorites.map((meal) => (
                <div
                  key={meal.idMeal}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                    />

                    <button
                      onClick={() => toggleFavorite(meal)}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-red-500 hover:text-red-600 transition"
                    >
                      <FiHeart
                        size={20}
                        fill="currentColor"
                      />
                    </button>
                  </div>

                  <div className="p-5">
                    <h2 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-1">
                      {meal.strMeal}
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Delicious recipe
                    </p>

                    <Link
                      to={`/recipe/${meal.idMeal}`}
                      className="inline-block mt-4 text-orange-500 font-semibold hover:text-orange-600"
                    >
                      View Recipe →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Favorites;