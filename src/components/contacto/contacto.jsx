import React, { useState } from 'react';
import wsp from "../../assets/whatsapp.svg";
import style from "./contacto.module.css"; // Asegúrate de tener tu archivo de estilos CSS

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [consulta, setConsulta] = useState('');
  const [telefono, setTelefono] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();


    const mensaje = `Hola, soy ${nombre}. Mi consulta es ${consulta} y mi número de teléfono es ${telefono}.`;
    const mailToLink = `mailto:ramirezcortinasmetalicas@gmail.com?subject=Consulta&body=${encodeURIComponent(mensaje)}`;
   
    window.open(mailToLink, '_blank')
  };

  return (
    <div className={style.contactContainer}>
      <h3>Contacto</h3>
      <form className={style.contactForm} onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="nombre">Nombre:</label>
          <input className={style.textArea}
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>


        <div className={style.formGroup}>
          <label htmlFor="telefono"> Teléfono:</label>
          <input className={style.textArea}
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="consulta">Consulta:</label>
          <textarea className={style.inputArea}
            type="text"
            id="consulta"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            required
          />
        </div>
        <div className={style.buttonContainer}>
          <button type="submit" className={style.contactBtn}>
            Enviar correo 
          </button>

        </div>
      </form>
    </div>
  );
};

export default Contacto;

