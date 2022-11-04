import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { dataBase } from "../../service/firebase";

const ItemDetailContainer = () => {
  const [products, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    const docRef = doc(dataBase, "products", productId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
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
      </div>
    );
  }

  return (
    <div className="ItemDetailContainer">
      <ItemDetail key={products.id} {...products} />
    </div>
  );
};

export default ItemDetailContainer;
