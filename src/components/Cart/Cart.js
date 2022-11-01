import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, total, clear } = useContext(CartContext);
  if (cart.length === 0)
    return (
      <div className="div1">
        <p> No hay elementos en el carrito </p>
        <Link to="/" className="btn btn-light p-1 m-2 btn-outline-dark">
          {" "}
          Ver productos{" "} 
        </Link>
      </div>
    );
  return (
    <div>
      <h3 className="tituloCart"> Productos seleccionados </h3>
      {cart.map((prod) => (  
        <div className="div1"> 
          <h5>{prod.name}</h5>
          <div>Cantidad: {prod.quantity}</div>
          <p className="SubTotal">Subtotal: ${prod.quantity * prod.price}</p>
          <button
            className="btn btn-light p-1 m-2 btn-outline-dark"
            onClick={() => removeItem (prod.id)}
          >
            Eliminar
          </button>
        </div>
      ))}

      <div className="div1">Total a pagar: ${total}</div>
      <div className="div1">
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
    </div>
  );
};

export default Cart;
