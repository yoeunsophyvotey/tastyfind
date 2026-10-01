import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

function IngredientInput({ ingredients, setIngredients }) {
  const [input, setInput] = useState("");

  function addIngredient(e) {
    e.preventDefault();

    const ingredient = input.trim().toLowerCase();

    if (!ingredient) {
      return;
    }

    if (ingredients.includes(ingredient)) {
      setInput("");
      return;
    }

    setIngredients([...ingredients, ingredient]);
    setInput("");
  }

  function removeIngredient(ingredientToRemove) {
    setIngredients(
      ingredients.filter(
        (ingredient) => ingredient !== ingredientToRemove
      )
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      <form
        onSubmit={addIngredient}
        className="flex flex-col sm:flex-row gap-3"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter an ingredient..."
          className="flex-1 px-5 py-3 rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-orange-500"
        />

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          <FiPlus size={20} />
          Add Ingredient
        </button>
      </form>

      {ingredients.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-5">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient}
              className="flex items-center gap-2 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full"
            >
              <span className="capitalize">
                {ingredient}
              </span>

              <button
                type="button"
                onClick={() => removeIngredient(ingredient)}
                className="text-orange-600 dark:text-orange-400 hover:text-red-500"
              >
                <FiX size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default IngredientInput;