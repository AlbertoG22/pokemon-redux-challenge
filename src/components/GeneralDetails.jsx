import PropTypes from "prop-types";
import { GeneralDetail } from "./";

export const GeneralDetails = ({ id, height, weight, baseExperience }) => {
  return (
    <>
      <div className="row">
        <GeneralDetail label="Height:" value={height * 10} unit="cm" />
        <GeneralDetail
          label="No."
          value={id}
          extraClass="d-flex justify-content-end"
        />
      </div>
      <div className="row">
        <GeneralDetail label="Experience:" value={baseExperience} />
        <GeneralDetail
          label="Weight:"
          value={weight}
          unit="kg"
          extraClass="d-flex justify-content-end"
        />
      </div>
    </>
  );
};

GeneralDetails.propTypes = {
  id: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  baseExperience: PropTypes.number.isRequired,
};
