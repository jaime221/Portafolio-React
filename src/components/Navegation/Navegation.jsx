import React from 'react';
import '../css/Navegation.css';

const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
function Navbar() {
  return (
    <nav className="navbar">
     <div className="logo">
        <img src={logoUrl} alt="Mi Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#Home">Inicio</a></li>
        <li><a href="#Repository">Proyectos</a></li>
        <li><a href="#Contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
