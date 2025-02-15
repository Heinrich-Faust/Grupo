import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users'); // Solicitar usuarios del backend
      setUsers(response.data);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Llamar a la función cuando el componente se monte
  }, []);

  // Función para manejar el inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      alert(`Bienvenido, ${user.name}!`);
      navigate('/dashboard');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Clave:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
