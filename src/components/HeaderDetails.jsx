import { FaChevronCircleLeft } from "react-icons/fa";

export const HeaderDetails = ({ name, onClick }) => {
  return (
    <div className="col-12 d-flex align-items-center justify-content-center mb-3">
      <FaChevronCircleLeft
        className="back-icon"
        size={30}
        color="#bdbdbd"
        onClick={() => onClick(-1)}
      />
      <h2 className="text-center">{name.toUpperCase()}</h2>
    </div>
  );
};
