import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            <Route path="/cart" element={<Cart />} />
            < Route path='/checkout' element={<Checkout />}/> 
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
