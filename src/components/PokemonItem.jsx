import { useCallback } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { capitalizeFirstLetter } from "../utils/format";
import { ErrorPage } from "../pages/ErrorPage";
import '../styles/components/PokemonItem.css';

export const PokemonItem = ({ pokemon, onClick, onDoubleClick }) => {
  const { selectedPokemon, error } = useSelector(state => state.pokemons);

  const handleClick = useCallback(() => onClick(pokemon), [pokemon, onClick]);
  const handleDoubleClick = useCallback(() => onDoubleClick(pokemon.name), [pokemon.name, onDoubleClick]);

  return (
    <>
      { error ? (
        <ErrorPage
          errorMsg={error}
          largeMsg="Please try reloading the page or come back later."
        />
      ) : (
        <div
          className={`pokemon-card ${selectedPokemon.name === pokemon.name ? 'selected' : ''}`}
          style={{ cursor: "pointer", userSelect: 'none' }}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
        >
          <p className="p-2 text-center">{capitalizeFirstLetter(pokemon.name)}</p>
        </div>
      ) }
    </>
  );
};

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
};