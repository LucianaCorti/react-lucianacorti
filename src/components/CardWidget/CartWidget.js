import "./CartWidget.css";

const CartWidget = () => {
  const srcCarrito =
    "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1661454472/1f6d2_xvo3g6.png";
  return (
    <div className="divCarrito">
      <img className="imgCarrito" src={srcCarrito} alt="img" />0
    </div>
  );
};

export default CartWidget;
