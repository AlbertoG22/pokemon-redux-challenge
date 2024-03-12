import PropTypes from "prop-types";
import { ProgressBar } from "./ProgressBar";

export const Stats = ({ data }) => {
  return (
    <>
      <p className="fw-bold mb-0 mt-3">Stats</p>
      {data.map((stat) => (
        <ProgressBar
          key={stat.stat.name}
          statName={stat.stat.name}
          baseStat={stat.base_stat}
        />
      ))}
    </>
  );
};

Stats.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    stat: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    base_stat: PropTypes.number.isRequired,
  })).isRequired,
};