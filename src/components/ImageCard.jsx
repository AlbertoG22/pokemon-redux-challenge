import { useSelector } from "react-redux";
import pokeLogo from '../../assets/poke_logo.webp';
import pokeballImage from "../../assets/pokeball.jpg";
import '../styles/components/ImageCard.css';

export const ImageCard = () => {
  const { selectedPokemon } = useSelector(state => state.pokemons);
  const pokemonImage = selectedPokemon.name 
    ? selectedPokemon.data.sprites.other?.dream_world?.front_default || pokeballImage
    : pokeballImage;
  
  return (
    <>
      <div className="logo-container d-flex justify-content-center align-items-center">
        <img src={pokeLogo} alt="Pokemon Logo" />
      </div>
      <div className="pokemon-image d-flex justify-content-center align-items-center">
        <img
          src={pokemonImage}
          alt="Selected Pokemon"
        />
      </div>
    </>
  );
};
