import { capitalizeFirstLetter } from "../utils/format";

export const Stats = ({ data  }) => {
  return (
    <>
      <p className="fw-bold mb-0 mt-3">Stats</p>
      {data.map((stat) => (
        <div key={stat.stat.name} className="my-2">
          <p style={{ fontSize: "13px" }} className="fw-bold mb-0">
            {capitalizeFirstLetter(stat.stat.name)}:
          </p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${stat.base_stat}%` }}
              aria-valuenow={stat.base_stat}
            />
          </div>
        </div>
      ))}
    </>
  );
};
