import React, { useState } from 'react';
import LoginButton from './LoginButton';

export default function NavBar({ openModal, currentUser }) {
  const [isMessagesVisible, setIsMessagesVisible] = useState(false);

  const handleBellClick = () => {
    setIsMessagesVisible((prev) => !prev);
  };

  // Validación de mensajes
  const userMessages = currentUser?.messages || [];

  return (
    <nav className='bg-white px-2 pb-8 fixed w-full h-52 top-0'>
      {/* Logo y opciones */}
      <div className='flex justify-between'>
        <div>
          <img className='w-48' src="banlog.png" alt="logo principal" />
        </div>
        <div className='flex justify-between gap-12 items-center'>
          <img
            className='w-6 cursor-pointer'
            src="https://www.svgrepo.com/show/58809/bell.svg"
            alt="campana"
            onClick={handleBellClick}
          />
          <img
            className='w-6'
            src="https://www.svgrepo.com/show/509211/question.svg"
            alt="question"
          />
          <a href="https://wa.me/message/AMY3ERPSGTAPP1" className=''><img
            className='w-6'
            src="https://www.svgrepo.com/show/505085/whatsapp.svg"
            alt="phone"
          /></a>
        </div>
      </div>

      {/* Mensaje de bienvenida */}
      <p className='text-xl mb-4'>Buenas tardes</p>

      {/* Botón de login */}
      <div className='flex justify-end'>
        <LoginButton openModal={openModal} />
      </div>

      {/* Notificaciones desplegables */}
      {isMessagesVisible && (
        <div className='absolute top-12 bg-white border rounded shadow-lg z-20 '>
          <ul>
            {userMessages.length > 0 ? (
              userMessages.map((message, index) => (
                <li
                  key={index}
                  className='p-2 border-b last:border-b-0'
                >
                  {message}
                </li>
              ))
            ) : (
              <li className='p-2 text-gray-500'>No hay mensajes.</li>
            )}
          </ul>
        </div>
      )}

      {/* Enlace de inscripción */}
      <a
        href=""
        className='flex justify-between absolute translate-y-1/2 bottom-0'
      >
        <button className='flex items-center gap-2 rounded-full border border-black px-2 py-2 bg-white'>
          <div>
            <img
              className='w-12 rounded-full border-2 border-gray-400'
              src="https://www.svgrepo.com/show/522417/lock-closed.svg"
              alt="Ícono de inscripción"
            />
          </div>
          <p className='block text-sm'>
            Inscribe a <br /> clave dinámica
          </p>
          <img
            className='w-6'
            src="https://www.svgrepo.com/show/521477/arrow-next.svg"
            alt="Siguiente"
          />
        </button>
      </a>

      {/* Imagen decorativa */}
      <img
        className='w-40 absolute right-0 -bottom-3 -rotate-12 z-10'
        src="lines.png"
        alt="Decoración"
      />
    </nav>
  );
}
