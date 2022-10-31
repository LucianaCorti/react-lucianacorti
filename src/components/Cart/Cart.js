import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, total, clear } = useContext(CartContext);
  if (cart.length === 0)
    return (
      <div>
        <p> No hay elementos en el carrito </p>
        <Link to="/"> Comenzar compra</Link>
      </div>
    );
  return (
    <div>
      {cart.map((prod) => (
        <div>
          {prod.name}
          <div>Cantidad: {prod.quantity}</div>
          <button
            className="btn btn-light p-1 m-2 btn-outline-dark"
            onClick={() => removeItem(prod.id)}
          >
            Eliminar
          </button>
        </div>
      ))}

      <div>Total a pagar: ${total}</div>
      <button
        className="btn btn-light p-1 m-2 btn-outline-dark"
        onClick={() => clear()}
      >
        Vaciar carrito
      </button>
      <Link className="btn btn-light p-1 m-2 btn-outline-dark" to="/checkout">
        Finalizar compra
      </Link>
    </div>
  );
};

export default Cart;
