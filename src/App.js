import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Counter from "./components/Counter/Counter";

function App() {
  const handleOnAdd = () => {
    console.log("agregaste al carrito");
  };

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer gretting={"Bienvenidos a nuestra tienda"} />
      <Counter onAdd={handleOnAdd} />
    </div>
  );
}

export default App;
