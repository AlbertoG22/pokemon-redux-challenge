import { createSlice } from '@reduxjs/toolkit';

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
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
    }
});

// Action creators are generated for each case reducer function
export const { startingPokemons, setPokemons, setPokemonSelected } = pokemonsSlice.actions;