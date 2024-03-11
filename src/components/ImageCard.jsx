import pokeballImage from "../../assets/pokeball.jpg";
import pokeLogo from '../../assets/poke_logo.webp';
import '../styles/components/ImageCard.css';
import { useSelector } from "react-redux";

export const ImageCard = () => {
  const { selectedPokemon } = useSelector(state => state.pokemons);
  
  return (
    <>
      <div className="logo-container d-flex justify-content-center align-items-center">
        <img src={pokeLogo} alt="Logo Pokemon" />
      </div>
      <div className="pokemon-image d-flex justify-content-center align-items-center">
        <img
          src={selectedPokemon.name === "" ? pokeballImage : selectedPokemon.data.sprites.other.dream_world.front_default}
          // src={""}
          alt="Selected Pokemon"
        />
      </div>
    </>
  );
};
