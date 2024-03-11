import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../store/slices/thunks";
import { ImageCard } from "../components/ImageCard";
import { PokemonItem } from "../components/PokemonItem";
import { setPokemonSelected } from "../store/slices/pokemonsSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import "../styles/pages/HomePage.css";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pokemons = [], page } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const handleBackNextPokemons = (button) => {
    let curPage = button === "next" ? page + 1 : page - 1;

    dispatch(fetchPokemons(curPage));
  };

  const handleOnClick = async (pokemon) => {
    const res = await fetch(pokemon.url);
    const data = await res.json();

    dispatch(setPokemonSelected({ name: pokemon.name, data }));
  };

  const handleDoubleClick = (name) => {
    navigate(`/details/${name}`);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-around images-container">
          <ImageCard />
        </div>

        <div className="col-md-6">
          <div className="row px-md-3 mt-4 mt-md-0" style={{ height: "93.5%" }}>
            {pokemons.map((pokemon) => (
              <div key={pokemon.name} className="col-md-6 col-xd-12">
                <PokemonItem
                  pokemon={pokemon}
                  onClick={handleOnClick}
                  onDoubleClick={handleDoubleClick}
                />
              </div>
            ))}
          </div>

          <div className="buttons-container d-flex justify-content-evenly">
            <Button
              text="← Back"
              action="back"
              disabledButton={page === 0}
              onClick={handleBackNextPokemons}
            />
            <Button
              text="Next →"
              action="next"
              disabledButton={page === 7}
              onClick={handleBackNextPokemons}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
