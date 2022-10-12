import React from "react";
import { useState } from "react";
import "./Counter.css";


const Counter = ({ onAdd, stock }) => {
  const [number, setNumber] = useState(1);

  const decrement = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const increment = () => {
    if (number < stock) {
      setNumber(number + 1);
    }
  };

  return (
    <div className="divCounter">
      <div className="divCounter1">
        <button
          type="button"
          className="btn btn-light p-2 m-3 btn-outline-dark"
          href="#"
          onClick={increment}
        >
          +
        </button>
        <h2 className="numContador">{number}</h2>
        <button
          type="button"
          className="btn btn-light p-2 m-3 btn-outline-dark"
          href="#"
          onClick={decrement}
        >
          -
        </button>
      </div>
      <button
        type="button"
        className="btn btn-light p-2 m-3 btn-outline-dark"
        href="#"
        onClick={onAdd}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
