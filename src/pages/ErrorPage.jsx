import PropTypes from "prop-types";
import { capitalizeAllWord } from "../utils/format";
import errorImg from "../../assets/errorImg.png";

export const ErrorPage = ({ errorMsg, largeMsg }) => {
  return (
    <div className="alert alert-danger col-md-6 m-0" role="alert">
      <h4 className="alert-heading text-center">
        ¡Ups! Something went wrong :c
      </h4>
      <p className="text-center mt-4 fw-bold">{capitalizeAllWord(errorMsg)}</p>
      <hr />
      <p className="mb-0">{largeMsg}</p>
      <div className="d-flex justify-content-center">
        <img
          src={errorImg}
          alt={errorMsg}
          style={{ maxWidth: "50%", height: "auto" }}
        />
      </div>
    </div>
  );
};

ErrorPage.propTypes = {
  errorMsg: PropTypes.string.isRequired,
  largeMsg: PropTypes.string,
};
