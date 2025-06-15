import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice, pokemonIdSlice, pokemonSlice } from "./slice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
    pokemonId: pokemonIdSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});

store.subscribe(() => {
  const favs = store.getState().favorites.list;
  localStorage.setItem("favorites", JSON.stringify(favs));
});
