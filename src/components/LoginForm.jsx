// src/components/LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = ({ closeModal, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { email, password };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyoIZqORfVGSEzKYchDUyHUKmK6_hz2Oc27lKGl_jUsMZ8WgQE-q3_btq9hk8QHjCq4/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (data.error) {
        setMessage("Correo o contraseña incorrectos");
        return;
      }

      // Guardar usuario en localStorage (opcional)
      localStorage.setItem("user", JSON.stringify(data));

      setMessage("Inicio de sesión exitoso");
      onLogin(data);
      closeModal();

    } catch (error) {
      console.error(error);
      setMessage("Error al conectar con el servidor");
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
        {message && <p>{message}</p>}
        <button
          className="border border-black rounded-full px-2 py-2"
          type="submit"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
