import PropTypes from "prop-types";
import { DetailField } from "./";

export const DetailTags = ({ text, data, propName }) => {
  const colNum = data.length;

  return (
    <>
      <p className="fw-bold mb-1">{text}</p>
      <div className="d-flex gap-2">
        {data.map((item) => (
          <DetailField
            key={item[propName].name}
            text={item[propName].name}
            colNum={colNum}
          />
        ))}
      </div>
    </>
  );
};

DetailTags.propTypes = {
  text: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  propName: PropTypes.string.isRequired,
};