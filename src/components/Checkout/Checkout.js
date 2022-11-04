import { useState, useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import {
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { dataBase } from "../../service/firebase/index";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const { cart, total, clear } = useContext(CartContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const [personalData, setPersonalData] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !address) {
      Swal.fire({
        title: "Es necesario que complete todos sus datos para continuar",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
    } else if (email !== checkEmail && email && checkEmail) {
      Swal.fire({
        title: "Los emails no coinciden",
        html: "Por favor, intente nuevamente",
        buttons: true,
        dangerMode: true,
      });
    } else {
      Swal.fire({
          title: "Datos almacenados",
          icon: "success",
          buttons: true,
      })
    setPersonalData(true);
  };
}

  const createOrder = async () => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name: { name },
          address: { address },
          phone: { phone },
          mail: { email },
        },
        items: cart,
        total: total,
      };

      const batch = writeBatch(dataBase);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(dataBase, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(dataBase, "orders");

        const orderAdded = await addDoc(orderRef, objOrder);

        clear();

        setTimeout(() => {
          navigate("/");
        }, 2000);

        Swal.fire(
          "Operacion exitosa!",
          `El id de su orden es: ${orderAdded.id}`
        );
      } else {
        Swal.fire({
          title: "Hay productos fuera de stock",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 className="text-center">Finalizando compra...</h2>;
  }

  return (
    <div>
      <h3 className="text-center ">
        Complete los datos para generar la orden.
      </h3>
      <div className="form text-center">
        <div className="form text-center">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" 
            className="form-label border border-5 "
            placeholder="Nombre completo"
          />
        </div>
        <div>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="form-label border border-5"
            placeholder="Dirección"
          />
        </div>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-label border border-5"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            value={checkEmail}
            onChange={(e) => setCheckEmail(e.target.value)}
            type="Confirme Email"
            className="form-label border border-5"
            placeholder=" Confirme Email"
            required
          />
        </div>
        <div>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            className="form-label border border-5"
            placeholder="Teléfono"
          />
        </div>
      </div>

      {personalData ? (
        <div className="text-center">
          <button
            onClick={createOrder}
            className="btn btn-light p-1 m-2 btn-outline-dark text-center"
          >
            FINALIZAR COMPRA
          </button>
        </div>
      ) : (
        <div className="text-center">
          <button
            onClick={submit}
            className="btn btn-light p-1 m-2 btn-outline-dark text-center"
          >
            {" "}
            Almacenar datos{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
