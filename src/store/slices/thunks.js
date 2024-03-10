import { setPokemons, startingPokemons } from "./pokemonsSlice";

export const fetchPokemons = (page = 20) => {
  return async (dispatch, getState) => {
    dispatch(startingPokemons());

    const limit = page === 160 ? 11 : 20;
    const resp = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=${limit}`
    );
    const data = await resp.json();
    dispatch(setPokemons({ newPokemons: data.results, page }));

    // console.log(data.results);
  };
};
