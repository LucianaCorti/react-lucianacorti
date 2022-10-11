import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  useEffect(() => {
    setLoading(true);

    const asyncFunction = categoryId ? getProductsByCategory : getProducts;
    asyncFunction(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

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
    );
  }

  return (
    <div className="contenedorLista1">
      <h1 className="tituloTienda">Tienda de plantas</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
