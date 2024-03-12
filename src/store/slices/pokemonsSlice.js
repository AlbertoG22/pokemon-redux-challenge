import { createSlice } from '@reduxjs/toolkit';

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
        error: '',
        selectedPokemon: {
            name: '',
            data: {}
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
            state.selectedPokemon = action.payload;
        },
        setError: (state, action) => {
            state.isLoading = false;
            state.pokemons = [];
            state.error = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { startingPokemons, setPokemons, setPokemonSelected, setError } = pokemonsSlice.actions;