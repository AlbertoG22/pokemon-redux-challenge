import PropTypes from "prop-types";
import { FaChevronCircleLeft } from "react-icons/fa";
import { capitalizeAllWord } from "../utils/format";

export const HeaderDetails = ({ name, onClick }) => {
  const handleBackClick = () => onClick(-1);

  return (
    <div className="col-12 d-flex align-items-center justify-content-center mb-3">
      <FaChevronCircleLeft
        className="back-icon"
        size={30}
        color="#bdbdbd"
        aria-label="go back"
        onClick={handleBackClick}
      />
      <h2 className="text-center">{capitalizeAllWord(name)}</h2>
    </div>
  );
};

HeaderDetails.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
