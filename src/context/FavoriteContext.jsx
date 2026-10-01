import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("tastyfind-favorites");

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "tastyfind-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  function toggleFavorite(meal) {
    setFavorites((currentFavorites) => {
      const alreadyFavorite = currentFavorites.some(
        (item) => item.idMeal === meal.idMeal
      );

      if (alreadyFavorite) {
        return currentFavorites.filter(
          (item) => item.idMeal !== meal.idMeal
        );
      }

      return [...currentFavorites, meal];
    });
  }

  function isFavorite(mealId) {
    return favorites.some(
      (item) => item.idMeal === mealId
    );
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoriteContext);
}

export default FavoriteProvider;