import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import { CartContext } from "../../CartContext/CartContext";
import "./ItemDetail.css";

//componente de visualización
const ItemDetail = ({ id, name, price, img, description, stock }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id,
      name,
      price,
      quantity,
    };

    addItem(productToAdd, quantity);
  };

  return (
    <div className="divContainerDetail">
      <div className="card1">
      <div className="imagen">
        <img src={img} alt={name} className="img" />
        </div>
        <div className="divDescripcion">
          <button className="btn btn-light p-1 m-2 btn-outline-dark " onClick={() => navigate(-1)}>
            {" "}
            Volver
          </button>
          <h3 className="name">{name}</h3>
          <p className="description">{description}</p>
          <p className="description">${price}</p>

          <div>
            {/* {
            isInCart(id)
            ? <ItemCount onAdd={handleOnAdd} stock={stock}/>
            : <Link to='/cart'>Finalizar Compra</Link>
          } */}
            <Counter onAdd={handleOnAdd} stock={stock} />
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
