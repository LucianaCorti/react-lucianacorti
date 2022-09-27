import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer gretting={"Bienvenidos a nuestra tienda"} />
    </div>
  );
}

export default App;
