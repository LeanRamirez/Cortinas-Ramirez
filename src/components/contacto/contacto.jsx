import React, { useState } from 'react';
import wsp from "../../assets/whatsapp.svg";
import "./contacto.css"; // Asegúrate de tener tu archivo de estilos CSS

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
    <div className="contacto-container">
      <h3>Contacto</h3>
      <form className="contacto-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input className="text-area"
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="telefono"> Teléfono:</label>
          <input className="text-area"
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Consulta:</label>
          <input className="input-area"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="button" onClick={redirectToWhatsApp} className="contacto-btn">
          <img src={wsp} alt="WhatsApp" className="wsp-icon" /> 
        </button>
      </form>
    </div>
  );
};

export default Contacto;

