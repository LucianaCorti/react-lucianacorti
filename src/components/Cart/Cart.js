import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from 'react-router-dom';

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
          <div>cantidad: {prod.quantity}</div>
          <button onClick={() => removeItem(prod.id)}>Eliminar</button>
        </div>
      ))}

      <div>Total a pagar: ${total}</div>
      <button onClick={() => clear()}>Vaciar carrito</button>
      <Link to='/checkout' >Checkout</Link>
    </div>
  );
};

export default Cart;
