import React, { useState } from 'react';
import mockUsers from '../data/mockUser'; // Importa el mock

const LoginForm = ({ closeModal, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si el usuario existe
    const user = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setMessage('Inicio de sesión exitoso');
      console.log('Usuario autenticado:', user);
      onLogin(user);
      closeModal();
    } else {
      setMessage('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="login-form">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="user"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {message && <p>{message}</p>}  {/* Mostrar errores */}
        <button
          className="border border-black rounded-full px-2 py-2"
          type="submit">Iniciar sesion</button>
      </form>
    </div>
  );
};

export default LoginForm;
