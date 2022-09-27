import React from "react";
// import meat from "../Asserts/meat.jpg";

function Ingredients({ value, item }) {
  return (
    <div>
      {Array(value)
        .fill(0)
        .map(() => (
          <img src={item} alt="meat" />
        ))}
    </div>
  );
}

export default Ingredients;
