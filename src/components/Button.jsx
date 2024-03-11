
export const Button = ({ text, action, disabledButton, onClick }) => {
  return (
    <button
      disabled={disabledButton}
      className="btn btn-secondary"
      onClick={() => onClick(action)}
    >
      { text }
    </button>
  );
};
