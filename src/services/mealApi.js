const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function searchMeals(query) {
  const response = await fetch(`${BASE_URL}/search.php?s=${query}`);

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data = await response.json();

  return data.meals || [];
}

export async function getMealById(id) {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }

  const data = await response.json();

  return data.meals?.[0] || null;
}

export async function getRandomMeal() {
  const response = await fetch(`${BASE_URL}/random.php`);

  if (!response.ok) {
    throw new Error("Failed to fetch random recipe");
  }

  const data = await response.json();

  return data.meals?.[0] || null;
}

export async function getMealsByCategory(category) {
  const response = await fetch(
    `${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category recipes");
  }

  const data = await response.json();

  return data.meals || [];
}

export async function getMealsByIngredient(ingredient) {
  const response = await fetch(
    `${BASE_URL}/filter.php?i=${ingredient}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch ingredient recipes");
  }

  const data = await response.json();

  return data.meals || [];
}

export function filterVegetarianMeals(meals) {
  const forbiddenIngredients = [
    "chicken",
    "beef",
    "pork",
    "lamb",
    "mutton",
    "turkey",
    "duck",
    "bacon",
    "ham",
    "sausage",
    "meat",
    "fish",
    "salmon",
    "tuna",
    "cod",
    "shrimp",
    "prawn",
    "crab",
    "lobster",
    "anchovy",
    "sardine",
    "oyster",
    "mussel",
  ];

  return meals.filter((meal) => {
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];

      if (!ingredient) {
        continue;
      }

      const ingredientName = ingredient.toLowerCase().trim();

      const containsForbidden = forbiddenIngredients.some(
        (forbidden) => ingredientName.includes(forbidden)
      );

      if (containsForbidden) {
        return false;
      }
    }

    return true;
  });
}


export function filterExcludedAreas(meals, excludedAreas) {
  return meals.filter(
    (meal) => !excludedAreas.includes(meal.strArea)
  );
}

export async function getPopularMeals() {
  const categories = ["Chicken", "Beef", "Seafood", "Pasta"];

  const results = await Promise.all(
    categories.map((category) => getMealsByCategory(category))
  );

  const meals = results.flat();

  return meals.slice(0, 8);
}

export async function getMealsByArea(area) {
  const response = await fetch(
    `${BASE_URL}/filter.php?a=${encodeURIComponent(area)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch area recipes");
  }

  const data = await response.json();
  return data.meals || [];
}
