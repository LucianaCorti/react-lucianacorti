import './Navbar.css'

const Navbar = () =>{
    const src = 'https://res.cloudinary.com/dvhvt4yk0/image/upload/v1664230849/Tienda_Cala_sxwto8.png'
    const srcCarrito = 'https://res.cloudinary.com/dvhvt4yk0/image/upload/v1661454472/1f6d2_xvo3g6.png'
    return (
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className= "imgLogo" src={src}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link p-3" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link p-3" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link p-3" href="#">Contacto</a>
        </li>
        <a className="navbar-brand p-2" href="#"><img className= "imgCarrito" src={srcCarrito}/><span>0</span></a>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar