import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../utils/format";
import { pokemonTypeColors } from "../utils/pokemonTypeColors";
import "../styles/components/DetailField.css";

export const DetailField = ({ text, colNum }) => {
  const { selectedPokemon } = useSelector((state) => state.pokemons);
  const defaultType = selectedPokemon.data.types[0].type.name;
  const bgColor = pokemonTypeColors[text] || pokemonTypeColors[defaultType];

  return (
    <div
      className={`field-content text-center col-${12 / colNum}`}
      style={{ backgroundColor: bgColor }}
    >
      {capitalizeFirstLetter(text)}
    </div>
  );
};
