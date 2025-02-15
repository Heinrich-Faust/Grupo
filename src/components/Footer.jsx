import React from 'react';
import logoLeft from '../assets/logo.png';
import logoRight from '../assets/amaya.png';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="/">
        <div className="footer-logo left-logo">
          <img src={logoLeft} alt="Logo Izquierdo" />
        </div>
      </a>
      <div className="footer-text">
        <p>&copy; {new Date().getFullYear()} Grupo Consultor A.H. Todos los derechos reservados.</p>
      </div>
      <a href="https://github.com/Heinrich-Faust">
        <div className="footer-logo right-logo">
          <img src={logoRight} alt="Logo Derecho" />
        </div>
      </a>
    </footer>
  );
};

export default Footer;
