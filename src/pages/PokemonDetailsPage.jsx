import { ImageCard } from "../components/ImageCard";
import { YellowField } from "../components/YellowField";
import "../styles/pages/HomePage.css";
import { useSelector } from "react-redux";

export const PokemonDetailsPage = () => {
  const { selectedPokemon } = useSelector((state) => state.pokemons);
  
  return (
    <div className="container mt-4">
      <div className="row">

        <div className="col-md-6 d-flex flex-column justify-content-around images-container">
          <ImageCard />
        </div>

        <div className="col-md-6">
          <div className="row" style={{ height: "93.5%" }}>
            
            <h2 className="text-center">
              {selectedPokemon.name.toUpperCase()}
            </h2>

            <div className="col-12">
              <p>Height: {selectedPokemon.data.height}</p>
              <p>Experience: {selectedPokemon.data.base_experience}</p>
              <hr />
            </div>

            <div className="col-12">
              <h5>Type</h5>
              { selectedPokemon.data.types.map((type) => (
                <YellowField key={type.type.name} text={type.type.name} />
              )) }
            </div>

            <div className="col-12">
              <h5>Abilities</h5>
              { selectedPokemon.data.abilities.map((ability) => (
                <YellowField key={ability.ability.name} text={ability.ability.name} />
              )) }
            </div>

            <div className="col-12">
              {selectedPokemon.data.stats.map((stat) => (
                <div key={stat.stat.name} className="my-2">
                  <strong>{stat.stat.name.toUpperCase()}:</strong>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                      aria-valuenow={stat.base_stat}
                      aria-valuemin="0"
                      aria-valuemax="255"
                    >
                      {/* {stat.base_stat} */}
                    </div>
                  </div>
                </div>
              ))}
            </div>


            
          </div>
        </div>

      </div>
    </div>
  );
};
