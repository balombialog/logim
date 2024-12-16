import React, { useState } from 'react';
import NavBar from './components/NavBar'
import Header from './components/Header'
import Section from './components/Section'
import Modal from './components/Modal'
import StateAcount from './components/StateAcount';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoged, setIsLoged] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  
  const handleSubmit = (user) => {
    setIsLoged(true); // Cambia el estado a logueado
    setCurrentUser(user); 
    closeModal(); // Cierra el modal 
  };

  return (
    <div className='pt-52'>
    {isLoged 
          ? <div><NavBar currentUser={currentUser}/>
            <StateAcount user ={currentUser}/>
            <Header/>
            <Section/>

          </div>
          :<div>
          <NavBar openModal={openModal} />
          <Modal showModal={showModal} closeModal={closeModal} onLogin={handleSubmit} />
          <Header/>
          <Section/></div>}
    </div>
  )
}
export default App;
