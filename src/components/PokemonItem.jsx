import { useCallback } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { capitalizeFirstLetter } from "../utils/format";
import '../styles/components/PokemonItem.css';

export const PokemonItem = ({ pokemon, onClick, onDoubleClick }) => {
  const { selectedPokemon } = useSelector(state => state.pokemons);

  const handleClick = useCallback(() => onClick(pokemon), [pokemon, onClick]);
  const handleDoubleClick = useCallback(() => onDoubleClick(pokemon.name), [pokemon.name, onDoubleClick]);

  return (
    <div
      className={`pokemon-card ${selectedPokemon.name === pokemon.name ? 'selected' : ''}`}
      style={{ cursor: "pointer" }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <p className="p-2 text-center">{capitalizeFirstLetter(pokemon.name)}</p>
    </div>
  );
};

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
};