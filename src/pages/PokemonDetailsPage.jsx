import React from "react";
import { ImageCard } from "../components/ImageCard";
import '../styles/pages/HomePage.css';
import { useSelector } from "react-redux";

export const PokemonDetailsPage = ({ image }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-around images-container">
          <ImageCard img={image} />
        </div>

        <div className="col-md-6">
          <div className="row" style={{ height: "93.5%" }}>
            Hola
          </div>
        </div>
      </div>
    </div>
  );
};
