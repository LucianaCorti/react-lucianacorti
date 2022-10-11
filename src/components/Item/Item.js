import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, img, name, price }) => {
  return (
    <div className="divContainer">
      <div className="card" key={id}>
        <div className="imagen">
          <img className="img card-img-top" src={img} alt={name} />
        </div>
        <div className="divDescripcion">
          <h5 className="name">{name}</h5>
          <p className="description">${price}</p>
          <Link to={`/detail/${id}`}>Ver detalle</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
