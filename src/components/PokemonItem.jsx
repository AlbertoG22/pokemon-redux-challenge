import { useSelector } from "react-redux";
import '../styles/components/PokemonItem.css';
import { capitalizeFirstLetter } from "../utils/format";

export const PokemonItem = ({ pokemon, onClick, onDoubleClick }) => {
  const { selectedPokemon } = useSelector(state => state.pokemons);
  return (
    <>
      <div
        className={`pokemon-card ${selectedPokemon.name === pokemon.name ? 'selected' : ''}`}
        style={{ cursor: "pointer" }}
        onClick={() => onClick(pokemon)}
        onDoubleClick={() => onDoubleClick(pokemon.name)}
      >
        <p className="p-2 text-center">{capitalizeFirstLetter(pokemon.name)}</p>
      </div>
    </>
  );
};
