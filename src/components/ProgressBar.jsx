import PropTypes from "prop-types";
import { capitalizeFirstLetter } from "../utils/format";

export const ProgressBar = ({ statName, baseStat }) => {
  return (
    <div key={statName} className="my-2">
      <p style={{ fontSize: "13px" }} className="fw-bold mb-0">
        {capitalizeFirstLetter(statName)}:
      </p>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${baseStat}%` }}
          aria-valuenow={baseStat}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  statName: PropTypes.string.isRequired,
  baseStat: PropTypes.number.isRequired,
};