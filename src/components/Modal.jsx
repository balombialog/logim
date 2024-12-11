// src/components/Modal.js
import React from 'react';
import LoginForm from './LoginForm';

const Modal = ({ showModal, closeModal, onLogin }) => {
  if (!showModal) return null; // Si el estado de showModal es falso, no se muestra nada.

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center' onClick={closeModal}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative" onClick={(e) => e.stopPropagation()}>
        <LoginForm closeModal={closeModal } onLogin={onLogin} />
      </div>
    </div>
  );
};

export default Modal;
