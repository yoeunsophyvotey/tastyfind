import { useState } from "react";
import { getMealsByIngredient } from "../services/mealApi";
import IngredientInput from "../components/cook/IngredientInput";
import MatchRecipeCard from "../components/cook/MatchRecipeCard";

function WhatCanICook() {
  const [ingredients, setIngredients] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  async function findRecipes() {
    if (ingredients.length === 0) {
      return;
    }

    setLoading(true);

    try {
      const results = await Promise.all(
        ingredients.map((ingredient) =>
          getMealsByIngredient(ingredient)
        )
      );

      const recipeMap = {};

      results.flat().forEach((meal) => {
        if (!recipeMap[meal.idMeal]) {
          recipeMap[meal.idMeal] = {
            meal,
            count: 0,
          };
        }

        recipeMap[meal.idMeal].count++;
      });

      const sortedMatches = Object.values(recipeMap)
        .sort((a, b) => b.count - a.count)
        .map((item) => ({
          ...item.meal,
          matchCount: item.count,
        }));

      setMatches(sortedMatches);
    } catch (error) {
      console.error(error);
      setMatches([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-orange-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-orange-500 font-semibold">
            SMART RECIPE FINDER
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mt-2">
            What Can I Cook?
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-5 text-lg">
            Tell us what ingredients you have and we'll help you discover
            recipes you can make.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-10">
          <IngredientInput
            ingredients={ingredients}
            setIngredients={setIngredients}
          />

          <button
            onClick={findRecipes}
            disabled={ingredients.length === 0 || loading}
            className="w-full mt-5 bg-orange-500 text-white py-4 rounded-full font-bold text-lg hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
          >
            {loading ? "Finding Recipes..." : "Find Recipes"}
          </button>
        </div>

        {matches.length > 0 && !loading && (
          <div className="mt-16">
            <div className="mb-8">
              <p className="text-orange-500 font-semibold">
                YOUR RESULTS
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                Recipes You Can Make
              </h2>

              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Showing recipes with the most matching ingredients first.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {matches.slice(0, 12).map((meal) => (
                <MatchRecipeCard
                  key={meal.idMeal}
                  meal={meal}
                  matchCount={meal.matchCount}
                  totalIngredients={ingredients.length}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default WhatCanICook;