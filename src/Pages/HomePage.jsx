import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import top from "../Asserts/top.jpg";
import bottom from "../Asserts/bottom.jpg";
import Ingredients from "../Components/Ingredients";
import Calculation from "../Components/Calculation";
import "../css/HomePage.css";
import meat from "../Asserts/meat.jpg";
import cheese from "../Asserts/cheese.jpg";
import lettuse from "../Asserts/lettuse.jpg";
import tomato from "../Asserts/tomato.jpg";

function HomePage(props) {
  const [price, setPrice] = useState(3);
  const [values, setValues] = useState({
    meat: 0,
    cheese: 0,
    lettuse: 0,
    tomato: 0,
  });

  const getItems = (value, key) => {
    setValues((existingValues) => ({
      ...existingValues,
      [key]: value,
    }));
  };

  return (
    <div>
      <NavBar />
      <div className="main d-flex flex-column main-style">
        <img src={top} alt="top" />
        <Ingredients value={values.cheese} item={cheese} />
        <Ingredients value={values.lettuse} item={lettuse} />
        <Ingredients value={values.tomato} item={tomato} />
        <Ingredients value={values.meat} item={meat} />
        <img src={bottom} alt="bottom" />
      </div>
      <h2>Price {price}$</h2>
      <Calculation name="meat" setItem={getItems} value={values.meat} setPrice={setPrice} price={price} specificPrice={10} />
      <Calculation name="cheese" setItem={getItems} value={values.cheese} setPrice={setPrice} price={price} specificPrice={7} />
      <Calculation name="lettuse" setItem={getItems} value={values.lettuse} setPrice={setPrice} price={price} specificPrice={2} />
      <Calculation name="tomato" setItem={getItems} value={values.tomato} setPrice={setPrice} price={price} specificPrice={3} />
    </div>
  );
}

export default HomePage;
