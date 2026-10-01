import { FiSearch, FiHeart, FiGrid } from "react-icons/fi";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">

      {/* Hero */}
      <section className="bg-orange-50 dark:bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-orange-500 font-semibold tracking-wide">
            ABOUT TASTYFIND
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mt-3">
            Discover Your Next Favorite Meal
          </h1>

          <p className="text-gray-600  dark:text-gray-300 text-lg leading-8 mt-6 max-w-2xl mx-auto">
            TastyFind helps you discover delicious recipes and find meals
            you can make with the ingredients you already have.
          </p>

        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold">
              WHAT WE DO
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
              Everything You Need to Find a Recipe
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Explore recipes, search for your favorite meals, and discover
              what you can cook with the ingredients you have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center">
                <FiSearch size={26} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6">
                Discover Recipes
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mt-3 leading-7">
                Search through a large collection of recipes and find
                something delicious to cook.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center">
                <FiGrid size={26} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6">
                Explore by Category
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mt-3 leading-7">
                Browse different food categories and discover recipes
                that match what you are looking for.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center">
                <FiHeart size={26} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6">
                Save Your Favorites
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mt-3 leading-7">
                Save recipes you love and easily find them again whenever
                you want to cook.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* What Can I Cook */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-orange-500 rounded-3xl px-8 py-12 md:px-16 md:py-14 text-white">

            <div className="max-w-3xl">
              <p className="text-orange-100 font-semibold">
                OUR SPECIAL FEATURE
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                What Can I Cook?
              </h2>

              <p className="text-orange-100 text-lg leading-8 mt-4">
                Have ingredients at home but don't know what to make?
                TastyFind helps you discover recipes based on the
                ingredients you already have.
              </p>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default About;