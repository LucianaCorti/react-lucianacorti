import "../asyncMock";
import "../ItemDetail/ItemDetail.css";
import Counter from "../Counter/Counter";

const ItemDetail = ({ img, name, stock, price, description }) => {
  const handleOnAdd = () => {
    console.log(`Se hizo click en agregar al carrito`);
  };
  return (
    <div className="divContainerDetail">
      <div className="card1">
        <div className="imagen">
          <img className="img" src={img} alt={name} />
        </div>
        <div className="divDescripcion">
          <h5 className="name">{name}</h5>
          <p className="description">{description}</p>
          <p className="description">${price}</p>
          <Counter onAdd={handleOnAdd} stock={stock} />
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
