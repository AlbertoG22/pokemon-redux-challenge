import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../store/slices/thunks";
import { ImageCard } from "../components/ImageCard";
import '../styles/pages/HomePage.css';

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
    <div className="container mt-5">
      <div className="row">

        <div className="col-md-6 d-flex flex-column justify-content-around images-container">
          <ImageCard img={image} />
        </div>

        <div className="col-md-6">
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
