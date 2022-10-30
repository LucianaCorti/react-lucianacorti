import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { dataBase } from "../../service/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(
          collection(dataBase, "products"),
          where("category", "==", categoryId)
        )
      : collection(dataBase, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();

          return { id: doc.id, ...data };
        });

        setProducts(productsAdapted);
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
