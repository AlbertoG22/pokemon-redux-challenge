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
