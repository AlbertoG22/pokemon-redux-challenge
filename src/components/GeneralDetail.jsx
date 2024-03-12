import PropTypes from "prop-types";

export const GeneralDetail = ({ label, value, unit = "", extraClass = "" }) => (
  <div className={`col-6 ${extraClass}`}>
    <p className="details-text">
      <strong>{label}</strong> {value}
      {unit}
    </p>
  </div>
);

GeneralDetail.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string,
  extraClass: PropTypes.string,
};
