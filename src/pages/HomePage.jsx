import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../store/slices/thunks";

export const HomePage = () => {
  const dispatch = useDispatch();
  const {
    pokemons = [],
    page,
    isLoading,
  } = useSelector((state) => state.pokemons);
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const handleNextPokemons = (button) => {
    const curPage = button === "next" ? page + 20 : page - 20;
    // if(curPage < 20)
    dispatch(fetchPokemons(curPage));
    console.log(page);
  };

  const handleClick = async (url) => {
    const res = await fetch(url);
    const img = await res.json();
    setImage(img.sprites.front_default);
    // console.log(img.sprites.front_default);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={image} alt="" />
        </div>
        <div className="col-6">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.name}
              onClick={() => handleClick(pokemon.url)}
              style={{ cursor: "pointer" }}
            >
              {pokemon.name}
            </div>
          ))}
          <button
            disabled={page === 20}
            onClick={() => handleNextPokemons("back")}
          >
            Back
          </button>
          <button
            disabled={page === 140}
            onClick={() => handleNextPokemons("next")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
