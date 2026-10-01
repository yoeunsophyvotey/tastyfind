import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoriteContext";

function RecipeCard({ meal }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(meal.idMeal);

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
      <div className="relative overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
        />

        <button
          onClick={() => toggleFavorite(meal)}
          className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full transition ${
            favorite
              ? "text-red-500"
              : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:text-red-500 hover:border-red-200"
          }`}
        >
          <FiHeart
            size={20}
            fill={favorite ? "currentColor" : "none"}
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
  );
}

export default RecipeCard;