import React from "react"
import { useState } from "react";
import "./Counter.css";

let stock = 10;

const Counter = ({ onAdd }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="divCounter">
      <h1 className="tituloContador">Contador</h1>
      <div className="divCounter1">
        <button
          type="button"
          className="btn btn-light p-2 m-3 btn-outline-dark"
          href="#"
          onClick={increment}
        >
          +
        </button>
        <h2 className="numContador">{count}</h2>
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
