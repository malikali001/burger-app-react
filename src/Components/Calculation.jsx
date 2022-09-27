// import { useState } from "react";
import React from "react";

function Calculation({ name, setItem, value, setPrice, price, specificPrice }) {
  return (
    <div className="calculation-style">
      <div className="d-flex flex-row justify-content-between my-1">
        <h3>Add {name}</h3>
        <button
          className="btn btn-info"
          disabled={value === 0 ? true : false}
          onClick={() => {
            setItem(value - 1, name);
            setPrice(price - specificPrice)
          }}
        >
          -
        </button>
        <button
          className="btn btn-warning"
          disabled={value === 10 ? true : false}
          onClick={() => {
            setItem(value + 1, name);
            setPrice(price + specificPrice)
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Calculation;
