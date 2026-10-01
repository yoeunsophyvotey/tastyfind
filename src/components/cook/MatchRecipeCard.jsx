import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";

function MatchRecipeCard({ meal, matchCount, totalIngredients }) {
  const matchPercentage = Math.round(
    (matchCount / totalIngredients) * 100
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {meal.strMeal}
        </h3>

        <div className="flex items-center gap-2 mt-3 text-green-600">
          <FiCheck size={18} />

          <span className="font-semibold">
            {matchPercentage}% ingredient match
          </span>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Matches {matchCount} of {totalIngredients} ingredients
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

export default MatchRecipeCard;