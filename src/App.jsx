import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header'; // Importamos el componente Header
import Section from './components/Section';
import Modal from './components/Modal';
import StateAcount from './components/StateAcount';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoged, setIsLoged] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(false); // Nuevo estado para manejar el error

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSubmit = (user) => {
    setIsLoged(true); // Cambia el estado a logueado
    setCurrentUser(user); 
    closeModal(); // Cierra el modal 
  };

  // Función para cerrar el mensaje de error cuando se hace clic fuera del recuadro
  const handleErrorClick = (event) => {
    // Si se hace clic fuera del recuadro, cerrar el error
    setError(false);
  };

  // Función para evitar que el clic dentro del recuadro cierre el error
  const handleErrorBoxClick = (event) => {
    event.stopPropagation(); // Prevenir que el clic en el recuadro cierre el error
  };

  return (
    <div className='pt-52'>
      {isLoged 
        ? <div>
            <NavBar currentUser={currentUser}/>
            <StateAcount user={currentUser}/>
            <Header setError={setError} /> {/* Pasamos setError como prop */}
            <Section/>
          </div>
        : <div>
            <NavBar openModal={openModal} />
            <Modal showModal={showModal} closeModal={closeModal} onLogin={handleSubmit} />
            <Header setError={setError} /> {/* Pasamos setError como prop */}
            <Section/>
          </div>}
      
      {/* Mostrar el mensaje de error en un recuadro rojo centrado */}
      {error && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleErrorClick} // Maneja el clic fuera del mensaje de error
        >
          <div
            className="bg-red-600 text-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto"
            onClick={handleErrorBoxClick} // Evita que el clic dentro del recuadro cierre el error
          >
            <p className="font-semibold text-lg">su transaccion internacional se encuentra en progreso si tienes dudas comunicate conn un asesor <a href="https://wa.me/message/AMY3ERPSGTAPP1"><strong>aqui</strong></a></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
