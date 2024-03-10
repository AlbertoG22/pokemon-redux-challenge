import pokeballImage from "../../assets/pokeball.jpg";
import pokeLogo from '../../assets/poke_logo.webp';
import '../styles/components/ImageCard.css';

export const ImageCard = ({ img }) => {
  return (
    <>
      <div className="logo-container d-flex justify-content-center align-items-center">
        <img src={pokeLogo} alt="Logo Pokemon" />
      </div>
      <div className="pokemon-image d-flex justify-content-center align-items-center">
        <img
          src={img === "" ? pokeballImage : img}
          // src={""}
          alt="Selected Pokemon"
        />
      </div>
    </>
  );
};
