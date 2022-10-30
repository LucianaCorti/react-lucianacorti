import { useState } from "react";
import "./Counter.css";

const Counter = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
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
        <h2 className="numContador">{quantity}</h2>
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
        onClick={() => onAdd(quantity)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
