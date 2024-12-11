// src/components/LoginButton.js
import React, { useState } from 'react';

const LoginButton = ({ openModal }) => {
  // Estado para manejar el texto del botón
  const [isLogged, setIsLogged] = useState(false);

  // Función para manejar el clic y cambiar el texto y reiniciar la página cuando se cierra sesión
  const handleLoginClick = () => {
    if (isLogged) {
      // Si está logueado y clickea en "Cerrar sesión", recargamos la página
      window.location.reload();
    } else {
      // Si no está logueado, abre el modal
      openModal();
    }

    // Cambia el estado de inicio de sesión
    setIsLogged(!isLogged);
  };

  return (
    <div className='relative z-20'>
      <button onClick={handleLoginClick} className='bg-gray-900 rounded-full text-white px-6 py-1 font-semibold'>
        <p>
          {isLogged ? 'Cerrar sesión' : 'Iniciar sesión'} 
          <img className='w-4 absolute right-2 top-1/2 -translate-y-1/2' src="logim.svg" alt="icono" />
        </p>
      </button>
    </div>
  );
};

export default LoginButton;
