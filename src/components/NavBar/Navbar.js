import "./Navbar.css";
import CartWidget from "../CardWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  const src =
    "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1664230849/Tienda_Cala_sxwto8.png";
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
        <Link to="/">
          {" "}
          <img className="imgLogo" src={src} />
        </Link>
      </a>
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
              <Link to="/">
                <li
                  id="item"
                  type="button"
                  className="btn btn-light p-1 m-2 btn-outline-dark"
                >
                  Inicio
                </li>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/plantas">
                <a
                  id="item"
                  type="button"
                  className="btn btn-light p-1 m-2 btn-outline-dark"
                >
                  Plantas
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/ramos">
                <a
                  id="item"
                  type="button"
                  className="btn btn-light p-1 m-2 btn-outline-dark"
                >
                  Ramos
                </a>
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
