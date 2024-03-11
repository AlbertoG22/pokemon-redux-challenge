import React from "react";
import { YellowField } from "./YellowField";

export const DetailTags = ({ text, data, propName }) => {
  return (
    <>
      <p className="fw-bold mb-1">{text}</p>
      <div className="d-flex gap-2">
        {data.map((item, _, arr) => (
          <YellowField
            key={item[propName].name}
            text={item[propName].name}
            colNum={arr.length}
          />
        ))}
      </div>
    </>
  );
};
