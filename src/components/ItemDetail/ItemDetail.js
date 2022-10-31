import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import { CartContext } from "../../CartContext/CartContext";
import "./ItemDetail.css";
import Swal from "sweetalert2";

const ItemDetail = ({ id, name, price, img, description, stock }) => {
  const { addItem} = useContext(CartContext);
  const navigate = useNavigate();

  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id,
      name,
      price,
      quantity,
    };
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Agregado al carrito",
    });
    addItem(productToAdd, quantity);
  };

  return (
    <div className="divContainerDetail">
      <div className="card1">
        <div className="imagen">
          <img src={img} alt={name} className="img" />
        </div>
        <div className="divDescripcion">
          <button
            className="btn btn-light p-1 m-2 btn-outline-dark "
            onClick={() => navigate(-1)}
          >
            {" "}
            Volver
          </button>
          <h3 className="name">{name}</h3>
          <p className="description">{description}</p>
          <p className="description">${price}</p>

          <div>
            {}
            <Counter onAdd={handleOnAdd} stock={stock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
