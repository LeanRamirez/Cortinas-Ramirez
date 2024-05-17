import React, { useState } from 'react';
import style from "./contacto.module.css"; // Asegúrate de tener tu archivo de estilos CSS
import logoGris from "../../assets/logoGris.png"

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
    <div className={style.mainContainer}>
        <div className={style.contactContainer}>
          <div className={style.titleContainer}>
              <div>
                <p>¡Contactanos!</p>
              <img className={style.logo} src={logoGris} alt="logo" />
              </div>
            </div>
          <form className={style.contactForm} onSubmit={handleSubmit}>
            <div className={style.formGroup}>
              <input className={style.textArea}
                type="text"
                id="nombre"
                placeholder='Nombre'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className={style.formGroup}>
              <input className={style.textArea}
                type="tel"
                id="telefono"
                placeholder='Telefono'
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
              />
            </div>

        <div className={style.formGroup}>
          <textarea className={style.inputArea}
            type="text"
            id="consulta"
            placeholder='Envíenos su consulta por mail y le responderemos a la brevedad'
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            required
          />
        </div>
        <div className={style.btnContainer}>
          <button type="submit" className={style.contactBtn}>
            Enviar correo 
          </button>

        </div>
      </form>
    </div>
    </div> 
  );
};

export default Contacto;

