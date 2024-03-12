import PropTypes from "prop-types";

export const Button = ({ text, action, disabledButton, onClick }) => {
  return (
    <button
      disabled={disabledButton}
      className="btn btn-secondary"
      onClick={() => onClick(action)}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  disabledButton: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
