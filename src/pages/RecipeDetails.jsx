import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { getMealById } from "../services/mealApi";
import { useFavorites } from "../context/FavoriteContext";
import mealOverrides from "../data/mealOverrides";

function RecipeDetails() {
  const { id } = useParams();

  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  const { toggleFavorite, isFavorite } = useFavorites();

  const favorite = meal ? isFavorite(meal.idMeal) : false;

  const areaOverride = mealOverrides[id];

  const cuisine =
    areaOverride?.area ||
    meal?.strArea ||
    "Not specified";

  

  useEffect(() => {
    async function loadMeal() {
      try {
        const data = await getMealById(id);
          setMeal(data);

          const recentRecipe = {
            idMeal: data.idMeal,
            strMeal: data.strMeal,
            strMealThumb: data.strMealThumb,
            strCategory: data.strCategory,
            strArea: data.strArea,
          };

          const oldRecipes = JSON.parse(
            localStorage.getItem("recentlyViewed") || "[]"
          );

          const updatedRecipes = [
            recentRecipe,
            ...oldRecipes.filter((recipe) => recipe.idMeal !== data.idMeal),
          ].slice(0, 20);

          localStorage.setItem(
            "recentlyViewed",
            JSON.stringify(updatedRecipes)
          );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadMeal();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-orange-500">Loading recipe...</p>
      </div>
    );
  }

  if (!meal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-300">
          Recipe not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10 items-start">

          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full rounded-3xl shadow-lg"
          />

          <div>
            <p className="text-orange-500 font-semibold">
              {meal.strCategory}
            </p>

            <div className="flex items-start justify-between gap-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
                {meal.strMeal}
              </h1>

              <button
                onClick={() => toggleFavorite(meal)}
                className={`shrink-0 mt-2 p-4 rounded-full border transition ${
                  favorite
                    ? "bg-red-50 text-red-500 border-red-200"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:text-red-500 hover:border-red-200"                }`}
              >
                <FiHeart
                  size={24}
                  fill={favorite ? "currentColor" : "none"}
                />
              </button>
            </div>

            <p className="text-gray-500 dark:text-gray-400 mt-3">
              Cuisine: {cuisine}
            </p>

              {/* incridiant */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ingredients
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                {Array.from({ length: 20 }, (_, index) => {
                  const ingredient = meal[`strIngredient${index + 1}`];
                  const measure = meal[`strMeasure${index + 1}`];

                  if (!ingredient || !ingredient.trim()) {
                    return null;
                  }

                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl px-4 py-3"
                    >
                      <span className="font-medium text-gray-800 dark:text-gray-100">
                        {ingredient}
                      </span>

                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-4 text-right">
                        {measure}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Instructions
              </h2>

              <p className="text-gray-600 dark:text-gray-300 leading-7 mt-4 whitespace-pre-line">
                {meal.strInstructions}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default RecipeDetails;