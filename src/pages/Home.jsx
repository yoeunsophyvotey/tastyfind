import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { getMealsByCategory } from "../services/mealApi";
import RecipeCard from "../components/recipe/RecipeCard";
import heroFood from "../assets/hero-food.png";
import cookFeature from "../assets/cook-feature.png";
import RecentlyViewed from "../components/recipe/RecentlyViewed";


import {
  FiCoffee,
  FiStar,
  FiHeart,
  FiGrid,
  FiGift,
  FiSun,
} from "react-icons/fi";

function Home() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const [popularMeals, setPopularMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    const categories = [
        "Chicken",
        "Beef",
        "Seafood",
        "Pasta",
        "Dessert",
        "Vegetarian",
        ];

        useEffect(() => {
            if (window.location.hash === "#recently-viewed") {
                setTimeout(() => {
                document.getElementById("recently-viewed")?.scrollIntoView({
                    behavior: "smooth",
                });
                }, 100);
            }
            }, []);

    useEffect(() => {
        async function loadPopularMeals() {
            try {
            const data = await getMealsByCategory("Chicken");
            setPopularMeals(data.slice(0, 8));
            } catch (error) {
            console.error(error);
            } finally {
            setLoading(false);
            }
        }

        loadPopularMeals();
        }, []);

    function handleSearch(e) {
    e.preventDefault();

    if (!search.trim()) {
        return;
    }

    navigate(`/explore?search=${encodeURIComponent(search)}`);
    }
  return (
    <div className="bg-white dark:bg-gray-950">

      <section className="relative overflow-hidden bg-orange-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 lg:py-24">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-8 items-center">

            {/* Left Content */}
            <div className="order-1">

                <p className="text-orange-500 font-bold tracking-wide text-sm">
                DISCOVER • COOK • ENJOY
                </p>

                <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mt-4">
                Delicious recipes,
                <span className="block text-orange-500">
                    made simple.
                </span>
                </h1>

                <p className="text-gray-600 dark:text-gray-300 text-lg leading-8 mt-6 max-w-xl">
                Discover delicious recipes, explore new dishes, and find
                something amazing to cook with the ingredients you already
                have.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-8">

                <Link
                    to="/explore"
                    className="bg-orange-500 text-white px-5 md:px-5 lg:px-7 py-3 md:py-3 lg:py-3.5 rounded-full font-semibold hover:bg-orange-600 transition whitespace-nowrap"
                >
                    Explore Recipes
                </Link>

                <Link
                    to="/cook"
                    className="border border-orange-500 text-orange-500 px-5 md:px-5 lg:px-7 py-3 md:py-3 lg:py-3.5 rounded-full font-semibold hover:bg-orange-100 transition whitespace-nowrap"
                >
                    What Can I Cook?
                </Link>

                </div>

                {/* Stats */}
                <div className="flex items-center gap-8 mt-10">

                <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    1000+
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Recipes
                    </p>
                </div>

                <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    6
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Categories
                    </p>
                </div>

                <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    Free
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    To Explore
                    </p>
                </div>

                </div>

            </div>

            {/* Right Food Image */}
           <div className="order-2 relative flex justify-center md:justify-end">

            <div className="relative w-70 h-70 md:w-90 md:h-90 lg:w-102.5 lg:h-102.5">

                {/* Orange Circle */}
                <div className="absolute inset-0 rounded-full border-8 border-orange-500/80">
                </div>

                {/* Food Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-xl">

                <img
                    src={heroFood}
                    alt="Delicious food"
                    className="w-full h-full object-cover"
                />

                </div>

                {/* Favorite Recipe Card */}
                <div className="absolute bottom-0 left-0 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 min-w-47.5">

                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                    <FiHeart
                    size={20}
                    className="text-orange-500"
                    />
                </div>

                <div>
                    <p className="text-xs text-gray-500">
                    Find your next
                    </p>

                    <p className="font-bold text-gray-900">
                    Favorite Recipe
                    </p>
                </div>

                </div>

            </div>

            </div>
            </div>
        </div>
        </section>
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">

            <p className="text-orange-500 font-semibold">
            FIND YOUR NEXT MEAL
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            What are you craving today?
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-3">
            Search for a recipe by name and discover something delicious.
            </p>

            <form
                onSubmit={handleSearch}
                className="mt-8 flex items-center w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm p-1.5"
                >
                <FiSearch
                    className="w-5 h-5 min-w-5 min-h-5 shrink-0 text-gray-400 ml-3"
                />

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for recipes..."
                    className="flex-1 min-w-0 px-3 py-2.5 outline-none text-gray-700 dark:text-white dark:bg-gray-800"
                />

                <button
                    type="submit"
                    className="shrink-0 bg-orange-500 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-orange-600 transition"
                >
                    Search
                </button>
                </form>

        </div>
        </section>


        {/* popular recipes section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                <div>
                    <p className="text-orange-500 font-semibold">
                    POPULAR RECIPES
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                    Recipes everyone loves
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Discover some delicious recipes to try today.
                    </p>
                </div>

                <Link
                    to="/explore"
                    className="text-orange-500 font-semibold hover:text-orange-600"
                >
                    View All Recipes →
                </Link>
                </div>

                {loading ? (
                <div className="text-center py-12">
                    <p className="text-orange-500 font-medium">
                    Loading recipes...
                    </p>
                </div>
                ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {popularMeals.map((meal) => (
                    <RecipeCard
                        key={meal.idMeal}
                        meal={meal}
                    />
                    ))}
                </div>
                )}

            </div>
            </section>
            <div id="recently-viewed">
                <RecentlyViewed />
                </div>
            {/* What Can I Cook Section */}
            <section className="py-20">
            <div className="bg-orange-500 rounded-3xl px-8 py-12 md:px-16 md:py-16 text-white">
                <div className="grid md:grid-cols-2 gap-10 items-center">

                <div>
                    <p className="font-semibold text-orange-100">
                    SMART RECIPE FINDER
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mt-2">
                    What Can I Cook?
                    </h2>

                    <p className="text-orange-100 mt-5 text-lg leading-7 max-w-xl">
                    Have some ingredients at home but don't know what to cook?
                    Tell us what you have and discover recipes you can make.
                    </p>

                    <Link
                    to="/cook"
                    className="inline-block mt-7 bg-white text-orange-500 px-7 py-3 rounded-full font-semibold hover:bg-orange-50 transition"
                    >
                    Find Recipes →
                    </Link>
                </div>

                <div className="flex justify-center">
                    <img
                        src={cookFeature}
                        alt="Cooking ingredients"
                        className="w-80 h-80 md:w-96 md:h-96 object-contain"
                    />
                </div>

                </div>
            </div>
            </section>
            
            {/* Category section */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-2xl mx-auto">
                    <p className="text-orange-500 font-semibold">
                        EXPLORE BY CATEGORY
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                        What are you in the mood for?
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 mt-3">
                        Browse recipes by category and discover your next delicious meal.
                    </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">

                    <Link
                        to="/explore?category=Chicken"
                        className="group bg-orange-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:bg-orange-500 transition duration-300"
                    >
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                        <FiHeart
                            size={32}
                            className="text-orange-500"
                        />
                        </div>

                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 group-hover:text-white">
                        Chicken
                        </h3>
                    </Link>

                    <Link
                        to="/explore?category=Beef"
                        className="group bg-orange-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:bg-orange-500 transition duration-300"
                    >
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                        <FiStar
                            size={32}
                            className="text-orange-500"
                        />
                        </div>

                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 group-hover:text-white">
                        Beef
                        </h3>
                    </Link>

                    <Link
                        to="/explore?category=Seafood"
                        className="group bg-orange-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:bg-orange-500 transition duration-300"
                    >
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                        <FiSun
                            size={32}
                            className="text-orange-500"
                        />
                        </div>

                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 group-hover:text-white">
                        Seafood
                        </h3>
                    </Link>

                    <Link
                        to="/explore?category=Pasta"
                        className="group bg-orange-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:bg-orange-500 transition duration-300"
                    >
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                        <FiGrid
                            size={32}
                            className="text-orange-500"
                        />
                        </div>

                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 group-hover:text-white">
                        Pasta
                        </h3>
                    </Link>

                    <Link
                        to="/explore?category=Dessert"
                        className="group bg-orange-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:bg-orange-500 transition duration-300"
                    >
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                        <FiGift
                            size={32}
                            className="text-orange-500"
                        />
                        </div>

                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 group-hover:text-white">
                        Dessert
                        </h3>
                    </Link>

                    <Link
                        to="/explore?category=Vegetarian"
                        className="group bg-orange-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:bg-orange-500 transition duration-300"
                    >
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                        <FiCoffee
                            size={32}
                            className="text-orange-500"
                        />
                        </div>

                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 group-hover:text-white">
                        Vegetarian
                        </h3>
                    </Link>

                    </div>
                </div>
                </section>

    </div>
  );
}

export default Home;