import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/fonts.css';
import '../styles/styles.css';
import logo from '../assets/logo.png';

const Header = ({ isAuthenticated, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Logo de la empresa" />
        </div>
      </Link>
      <div className="title">
        <h1 className="merriweather-black-italic">Grupo Consultor A.H.</h1>
      </div>
      <div className="menu">
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className="nav-item">Inicio</Link></li>
            <li><Link to="/about" className="nav-item">Acerca de</Link></li>
            <li><Link to="/contact" className="nav-item">Contacto</Link></li>
            
            {isAuthenticated ? (
              <>
                <li><Link to="/dashboard" className="nav-item">Dashboard</Link></li>
                <li>
                  <button onClick={handleLogout} className="nav-item logout-button">
                    Cerrar Sesión
                  </button>
                </li>
              </>
            ) : (
              <li><Link to="/login" className="nav-item">Iniciar Sesión</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
