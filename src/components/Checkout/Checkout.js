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
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const [personalData, setPersonalData] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!name && !email && !phone && !address) {
      Swal.fire({
        title: "Completa tus datos",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
    } else setPersonalData(true);
    Swal.fire({
      title: "Datos almacenados",
      icon: "success",
      buttons: true,
      dangerMode: true,
    });
  };

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
          "Muchas gracias por su compra!",
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
    return <h1>Muchas gracias por su compra!</h1>;
  }

  return (
    <div>
      <h1>Completa los datos para generar la orden.</h1>
      <div className="myForm1">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-input"
          placeholder="Nombre"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          className="form-input"
          placeholder="Dirección"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-input"
          placeholder="Email"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          className="form-input"
          placeholder="Teléfono"
        />
      </div>
      <h1>Checkout</h1>

      {personalData ? (
        <button onClick={createOrder}>Generar Pedido</button>
      ) : (
        <div>
          <p>Complete sus datos</p>
          <button onClick={submit}> Almacenar datos </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
