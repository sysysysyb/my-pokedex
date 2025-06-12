import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
  "pokemon/fetchMultiplePokemonById",
  async (maxPokemonId) => {
    const numberArray = Array.from(
      { length: maxPokemonId },
      (_, idx) => idx + 1
    );

    const fetchAPI = async (pokemonId) => {
      // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
      );
      const data = await response.json();

      const pokemonData = {
        id: pokemonId,
        // types: data.types.map((el) => el.type.name),
        color: data.color.name,
        name: data.names.find((el) => el.language.name === "ko").name,
        desc: data.flavor_text_entries.find((el) => el.language.name === "ko")
          .flavor_text,
        sprites: {
          front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
          back_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
          front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonId}.png`,
          back_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemonId}.png`,
        },
      };

      return pokemonData;
    };

    return await Promise.all(numberArray.map((el) => fetchAPI(el)));
  }
);
