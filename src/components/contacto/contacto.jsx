
import React, { useState } from 'react';
import wsp from "../../assets/whatsapp.svg"
import "./contacto.css"



const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const redirectToWhatsApp = () => {
    const mensaje = `Hola, soy ${nombre}. Mi consulta es ${email} y mi número de teléfono es ${telefono}.`;
    const urlWhatsApp = `https://wa.me/3794205998?text=${encodeURIComponent(mensaje)}`;
    window.location.href = urlWhatsApp;
  };

  return (
    <div>
      
      <h2>Contacto</h2>
      <form className='container-fluid'>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="email">Consulta:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="telefono">Número de Teléfono (con código de país):</label>
        <input
          type="tel"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />

        <button type="button" onClick={redirectToWhatsApp} className="btn btn-success">
          <img className="bi bi-whatsapp" src={wsp}></img> Enviar Whatsapp
        </button>

          
        
      </form>
    </div>
  );
};

export default Contacto;
