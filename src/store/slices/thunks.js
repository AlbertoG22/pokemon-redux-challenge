import { setError, setPokemons, startingPokemons } from "./pokemonsSlice";

export const fetchPokemons = (page = 0) => {
  return async (dispatch) => {
    dispatch(startingPokemons());

    try {
      const limit = page === 7 ? 11 : 20;
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ page * 20 }`
      );
      const data = await resp.json();
  
      dispatch(setPokemons({ newPokemons: data.results, page }));
    } catch(err) {
      console.log(err);
      dispatch(setError(err.message));
    }
  };
};
