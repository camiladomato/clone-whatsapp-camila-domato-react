import { Link } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../../context/appContext";
import { FaWhatsapp } from "react-icons/fa";
import './styles.css'

const Nav = () => {
  const { user, logOut } = useContext(appContext);

  return (
    <nav className="main-nav">
      <div className="nav-logo">
        <FaWhatsapp className="logo-wsp"/>
        <Link to="/">Whatsapp</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Chat</Link></li>
        <li><Link to="/acerca">Acerca de</Link></li>
        {!user ? (
          <>
            <li><Link to="/ingresar">Ingresar</Link></li>
            <li><Link to="/registro">Registro</Link></li>
          </>
        ) : (
          <li><button onClick={logOut} className="btn-logout">Salir</button></li>
        )}
      </ul>
    </nav>
  );
};

export { Nav };