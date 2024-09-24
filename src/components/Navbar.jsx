import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Pizzería Mamma Mía</h1>
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/register" className="nav-link">Registrarse</Link>
        <Link to="/login" className="nav-link">Iniciar Sesión</Link>
        <Link to="/profile" className="nav-link">Perfil</Link>
        <Link to="/cart" className="custom-cart-btn">
        🛒Total: $xxx
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
