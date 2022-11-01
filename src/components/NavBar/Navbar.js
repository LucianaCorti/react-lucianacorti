import "./Navbar.css";
import CartWidget from "../CardWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  const src =
    "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1664230849/Tienda_Cala_sxwto8.png";
  return (
    <nav className="navbar navbar-expand-lg">
        <Link to="/">
          {" "}
          <img className="imgLogo" src={src} />
        </Link>

      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                id="item"
                type="button"
                className="btn btn-light p-1 m-2 btn-outline-dark"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/plantas"
                id="item"
                type="button"
                className="btn btn-light p-1 m-2 btn-outline-dark"
              >
                Plantas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/ramos"
                id="item"
                type="button"
                className="btn btn-light p-1 m-2 btn-outline-dark"
              >
                Ramos
              </Link>
            </li>
          </ul>
        </div>
        <div className="divCarrito">
          <div>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
