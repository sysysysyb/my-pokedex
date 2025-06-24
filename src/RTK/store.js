import { configureStore } from "@reduxjs/toolkit";
import {
  favoritesSlice,
  pokemonIdSlice,
  pokemonSlice,
  pokemonHomeSlice,
  selectedSlice,
} from "./slice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
    pokemonHome: pokemonHomeSlice.reducer,
    pokemonId: pokemonIdSlice.reducer,
    selectedPokemon: selectedSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});

store.subscribe(() => {
  const favs = store.getState().favorites.list;
  localStorage.setItem("favorites", JSON.stringify(favs));
});
