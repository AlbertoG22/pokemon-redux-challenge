import { createSlice } from '@reduxjs/toolkit';

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
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
    }
});

// Action creators are generated for each case reducer function
export const { startingPokemons, setPokemons } = pokemonsSlice.actions;