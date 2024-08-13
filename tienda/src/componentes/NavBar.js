import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
        <nav>
          <ul>
            <div className="navbarli">
              <li className="navbaritem"><Link to="/" className="navbarlink">Inicio</Link></li>
              <li className="navbaritem"><Link to="/about" className="navbarlink">Acerca de</Link></li>
              <li className="navbaritem"><Link to="/products" className="navbarlink">Productos</Link></li>
              <li className="navbaritem"><Link to="/user" className="navbarlink">Contacta con nosotros</Link></li>
            </div>
          </ul>
        </nav>
    </div>
  );
}