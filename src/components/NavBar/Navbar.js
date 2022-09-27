import "./Navbar.css";
import CartWidget from "../CardWidget/CartWidget";

const Navbar = () => {
  const src =
    "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1664230849/Tienda_Cala_sxwto8.png";
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
        <img className="imgLogo" src={src} />
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
              <button
                type="button"
                className="btn btn-light p-1 m-2 btn-outline-dark"
                href="#"
              >
                Inicio
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-light p-1 m-2 btn-outline-dark"
                href="#"
              >
                Productos
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-light p-1 m-2  btn-outline-dark"
                href="#"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
