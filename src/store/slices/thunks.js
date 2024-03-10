import { setPokemons, startingPokemons } from "./pokemonsSlice";

export const fetchPokemons = (page = 20) => {
  return async (dispatch) => {
    dispatch(startingPokemons());

    const resp = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`
    );
    const data = await resp.json();
    dispatch(setPokemons({ newPokemons: data.results, page }));

    // console.log(data.results);
  };
};
