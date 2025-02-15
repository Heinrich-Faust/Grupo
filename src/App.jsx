import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Services from './components/Services';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import './styles/styles.css';
import './styles/fonts.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Leer el estado de autenticación desde localStorage al cargar la app
  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(savedAuth === 'true');
  }, []);

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Guardar en localStorage
    navigate('/dashboard');
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Limpiar localStorage
    navigate('/login');
  };

  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<><Carousel /><Services /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/login" 
            element={<Login setIsAuthenticated={handleLogin} />} 
          />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Login setIsAuthenticated={handleLogin} />} 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
