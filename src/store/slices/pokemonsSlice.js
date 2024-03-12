import { createSlice } from "@reduxjs/toolkit";

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
    error: "",
    selectedPokemon: {
      name: "",
      data: {},
    },
  },
  reducers: {
    startingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.pokemons = action.payload.newPokemons;
      state.isLoading = false;
      state.page = action.payload.page;
    },
    setPokemonSelected: (state, action) => {
      state.isLoading = false;
      state.selectedPokemon = action.payload;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.pokemons = [];
      state.error = action.payload;
    },
    setPokemonSelectedError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  startingPokemons,
  setPokemons,
  setPokemonSelected,
  setError,
  setPokemonSelectedError,
} = pokemonsSlice.actions;
