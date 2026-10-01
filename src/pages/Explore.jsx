import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  searchMeals,
  getMealsByCategory,
  getPopularMeals,
  filterVegetarianMeals,
  filterExcludedAreas,
} from "../services/mealApi";

import RecipeCard from "../components/recipe/RecipeCard";
import { FiSearch } from "react-icons/fi";

function Explore() {
  const excludedAreas = [
    "Thai",
  ];

  const [searchParams] = useSearchParams();

  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const suggestions = [
    "Chicken",
    "Chicken Pasta",
    "Chicken Curry",
    "Chicken Soup",
    "Beef",
    "Beef Pasta",
    "Seafood",
    "Salmon",
    "Pasta",
    "Pizza",
    "Dessert",
    "Vegetarian",
  ];
  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const query = searchParams.get("search");
    const category = searchParams.get("category");

    if (query) {
      setSearch(query);
      setSelectedCategory("");
      searchFromUrl(query);
    } else if (category) {
      setSearch("");
      setSelectedCategory(category);
      searchCategory(category);
    } else {
      setSearch("");
      setSelectedCategory("");
      loadPopularMeals();
    }
  }, [searchParams]);

  async function loadPopularMeals() {
    setLoading(true);
    setSearched(false);

    try {
      const data = await getPopularMeals();
      setMeals(data);
    } catch (error) {
      console.error(error);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  }


    async function searchFromUrl(query) {
        setLoading(true);
        setSearched(true);

        try {
            const data = await searchMeals(query);
            setMeals(data);
        } catch (error) {
            console.error(error);
            setMeals([]);
        } finally {
            setLoading(false);
        }
        }
    async function searchCategory(category) {
      setLoading(true);
      setSearched(true);

      try {
        let data = await getMealsByCategory(category);

        if (category === "Vegetarian") {
          data = filterVegetarianMeals(data);
        }

        data = filterExcludedAreas(data, excludedAreas);

        setMeals(data);
      } catch (error) {
        console.error(error);
        setMeals([]);
      } finally {
        setLoading(false);
      }
    }

  async function handleSearch(e) {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }

    setLoading(true);
    setSearched(true);

    try {
      const data = await searchMeals(search);
      setMeals(data);
    } catch (error) {
      console.error(error);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold tracking-wide">
            {selectedCategory ? "CATEGORY" : "EXPLORE RECIPES"}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            {selectedCategory
              ? `${selectedCategory} Recipes`
              : search
              ? `Search Results for "${search}"`
              : "Explore Recipes"}
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover delicious recipes and find something you would love to cook.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="max-w-2xl mx-auto mt-10 relative"
        >
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 p-2">
            <FiSearch
              size={22}
              className="text-gray-400 ml-4"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Search recipes..."
              className="flex-1 px-4 py-3 outline-none text-gray-700 dark:text-gray-100 bg-transparent"
            />

            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Search
            </button>
          </div>
          {showSuggestions && search.trim() && filteredSuggestions.length > 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden z-20">

              {filteredSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => {
                    setSearch(suggestion);
                    setShowSuggestions(false);
                  }}
                  className="w-full flex items-center gap-3 px-5 py-3 text-left text-gray-700 dark:text-gray-200 hover:bg-orange-50 hover:text-orange-500 transition"
                >
                  <FiSearch
                    size={17}
                    className="text-gray-400"
                  />

                  <span>{suggestion}</span>
                </button>
              ))}

            </div>
          )}
        </form>

        {loading && (
          <div className="text-center mt-12">
            <p className="text-orange-500 font-medium">
              Finding delicious recipes...
            </p>
          </div>
        )}

        {!loading && searched && meals.length === 0 && (
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              No recipes found
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Try searching for another ingredient or recipe.
            </p>
          </div>
        )}

        {!loading && meals.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {selectedCategory
                ? `${selectedCategory} Recipes`
                : search
                ? "Search Results"
                : "Popular Recipes"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {meals.map((meal) => (
                <RecipeCard
                  key={meal.idMeal}
                  meal={meal}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Explore;