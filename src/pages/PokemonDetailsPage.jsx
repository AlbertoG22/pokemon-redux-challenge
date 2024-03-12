import { ImageCard, HeaderDetails, GeneralDetails, DetailTags, Stats } from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import "../styles/pages/GeneralPage.css";

export const PokemonDetailsPage = () => {
  const { selectedPokemon, error, isLoading } = useSelector(
    (state) => state.pokemons
  );
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-around images-container">
          <ImageCard />
        </div>

        {error && !isLoading ? (
          <ErrorPage
            errorMsg={error}
            largeMsg="Please try reloading the page or come back later."
          />
        ) : (
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
              <hr />

              <div className="col-12">
                <DetailTags
                  text="Type"
                  data={selectedPokemon.data.types}
                  propName="type"
                />
              </div>

              <div className="col-12">
                <DetailTags
                  text="Abilities"
                  data={selectedPokemon.data.abilities}
                  propName="ability"
                />
              </div>

              <div className="col-12">
                <Stats data={selectedPokemon.data.stats} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
