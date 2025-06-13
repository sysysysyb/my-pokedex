import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonById } from "./thunk";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: true,
  },
  reducers: {}, // 동기적 상태 변경
  extraReducers: (builder) => {
    builder
      .addCase(fetchMultiplePokemonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMultiplePokemonById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    list: JSON.parse(localStorage.getItem("favorites")) || [],
  },
  reducers: {
    add(state, action) {
      state.list.push(action.payload);
    },
    remove(state, action) {
      state.list = state.list.filter((id) => id !== action.payload);
    },
  },
});

export const { add, remove } = favoritesSlice.actions;
