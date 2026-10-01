import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecentlyViewed() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes = JSON.parse(
      localStorage.getItem("recentlyViewed") || "[]"
    );

    setRecipes(savedRecipes);
  }, []);

  if (recipes.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-orange-500 font-semibold">
              RECENTLY VIEWED
            </p>

            <h2 className="text-3xl md:text-4xl  font-bold text-gray-900 dark:text-white mt-2">
              Recipes you viewed
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Quickly find the recipes you recently checked.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {recipes.slice(0, 4).map((recipe) => (
            <Link
              key={recipe.idMeal}
              to={`/recipe/${recipe.idMeal}`}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700"
            >

              <div className="overflow-hidden">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">

                <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-1">
                  {recipe.strMeal}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {recipe.strCategory || "Recipe"}
                </p>

                <p className="text-orange-400 font-semibold mt-4">
                  View Recipe →
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

export default RecentlyViewed;