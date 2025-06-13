import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice, pokemonSlice } from "./slice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});

store.subscribe(() => {
  const favs = store.getState().favorites.list;
  localStorage.setItem("favorites", JSON.stringify(favs));
});
