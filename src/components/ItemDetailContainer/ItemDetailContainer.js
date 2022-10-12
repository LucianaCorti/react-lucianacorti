import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductById } from "../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    getProductById(productId)
      .then((response) => {
        setProduct(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <div className="divSpinner">
      <div className="divSpinner1">
      <img
        className="imgSpinner"
        src={
          "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1662580958/loading-45_y9vcuk.webp"
        }
      />
      </div>
      ;
    </div> 
    )
  }

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
