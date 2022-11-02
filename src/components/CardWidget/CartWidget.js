import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const srcCarrito =
    "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1661454472/1f6d2_xvo3g6.png";

  return (
    <div className="divCarrito">
      <Link to="/cart">
        <div className="carrito">
          <img src={srcCarrito} alt="cart" className="imgCarrito" />
          <p className="totalCarrito">{totalQuantity}</p>
        </div>
        <div className="cart-span">

        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
