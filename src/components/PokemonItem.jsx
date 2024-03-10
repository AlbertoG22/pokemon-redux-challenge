import { useSelector } from "react-redux";
import '../styles/components/PokemonItem.css';

export const PokemonItem = ({ pokemon, onClick, onDoubleClick }) => {
  const { selectedPokemon } = useSelector(state => state.pokemons);
  return (
    <>
      <div
        className={`pokemon-card ${selectedPokemon === pokemon.name ? 'selected' : ''}`}
        style={{ cursor: "pointer" }}
        onClick={() => onClick(pokemon)}
        onDoubleClick={() => onDoubleClick(pokemon.name)}
      >
        <p className="p-2 text-center">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
      </div>
    </>
  );
};
