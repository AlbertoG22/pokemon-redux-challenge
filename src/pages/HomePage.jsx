import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../store/slices/thunks";
import { ImageCard } from "../components/ImageCard";
import '../styles/pages/HomePage.css';
import { PokemonItem } from "../components/PokemonItem";

export const HomePage = () => {
  const dispatch = useDispatch();
  const {
    pokemons = [],
    page,
    isLoading,
  } = useSelector((state) => state.pokemons);
  const [image, setImage] = useState('');

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const handleNextPokemons = (button) => {
    let curPage = button === "next" ? page + 20 : page - 20;

    dispatch(fetchPokemons(curPage));
  };

  const handleOnClick = async (url) => {
    const res = await fetch(url);
    const img = await res.json();

    setImage(img.sprites.front_default);
  };

  return (
    <div className="container mt-4">
      <div className="row">

        <div className="col-md-6 d-flex flex-column justify-content-around images-container">
          <ImageCard img={image} />
        </div>

        <div className="col-md-6">
          <div className="row">
            {pokemons.map((pokemon) => (
              <div key={pokemon.name} className="col-md-6 col-xd-12">
                <PokemonItem pokemon={pokemon} onClick={handleOnClick} />
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-evenly">
            <button
              disabled={page === 20}
              className="btn btn-secondary"
              onClick={() => handleNextPokemons("back")}
            >
              ← Back
            </button>
            <button
              disabled={page > 140}
              className="btn btn-secondary"
              onClick={() => handleNextPokemons("next")}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
