import { ImageCard } from "../components/ImageCard";
import { YellowField } from "../components/YellowField";
import "../styles/pages/HomePage.css";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../utils/format";
import { FaChevronCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HeaderDetails } from "../components/HeaderDetails";
import { GeneralDetails } from "../components/GeneralDetails";

export const PokemonDetailsPage = () => {
  const { selectedPokemon } = useSelector((state) => state.pokemons);
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-around images-container">
          <ImageCard />
        </div>

        <div className="col-md-6">
          <div
            className="row px-md-3 mt-4 mb-5 mt-md-0"
            style={{ height: "93.5%" }}
          >
            <HeaderDetails name={selectedPokemon.name} onClick={navigate} />

            <div className="col-12">
              <GeneralDetails
                id={selectedPokemon.data.id}
                height={selectedPokemon.data.height}
                weight={selectedPokemon.data.weight / 10}
                baseExperience={selectedPokemon.data.base_experience}
              />
            </div>

            <hr
              style={{
                backgroundColor: "#c7a10a",
                height: "2px",
                marginTop: "0",
              }}
            />

            <div className="col-12">
              <p className="fw-bold mb-1">Type</p>
              <div className="d-flex gap-2">
                {selectedPokemon.data.types.map((type, _, arr) => (
                  <YellowField
                    key={type.type.name}
                    text={type.type.name}
                    colNum={arr.length}
                  />
                ))}
              </div>
            </div>

            <div className="col-12">
              <p className="fw-bold mb-1">Abilities</p>
              <div className="d-flex gap-2">
                {selectedPokemon.data.abilities.map((ability, _, arr) => (
                  <YellowField
                    key={ability.ability.name}
                    text={ability.ability.name}
                    colNum={arr.length}
                  />
                ))}
              </div>
            </div>

            <div className="col-12">
              <p className="fw-bold mb-0 mt-3">Stats</p>
              {selectedPokemon.data.stats.map((stat) => (
                <div key={stat.stat.name} className="my-2">
                  <p style={{ fontSize: "13px" }} className="fw-bold mb-0">
                    {capitalizeFirstLetter(stat.stat.name)}:
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${stat.base_stat}%` }}
                      aria-valuenow={stat.base_stat}
                    />
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
