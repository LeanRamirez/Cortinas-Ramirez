import React from "react";
import styles from "./footer.module.css";
/* Asegúrate de ajustar la ruta según tu estructura de archivos */
// @import "~bootstrap-icons/font/bootstrap-icons.css";
  // Asegúrate de ajustar la ruta según tu estructura de archivos

const Footer = () => {

    const latitude = -27.51998445701687;
    const longitude = -58.557382402868605;

    const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

    const emailAddress = "ramirezcortinasmetalicas@gmail.com";
    const facebookPageUrl = "https://www.facebook.com/profile.php?id=100050872316218";
    const instagramPageUrl = "https://www.instagram.com/cortinasmetalicasramirez/";
    
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contacto</h4>
            <p>
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                    Ver en Google Maps
                </a>
            </p>
            <p>Teléfono: 3794-20-5998</p>
            <p>
            <a href={`mailto:${emailAddress}`}> {emailAddress}</a>
            </p>

            
          </div>
          <div className="col-md-6">
            <h4>Redes Sociales</h4>
            {/* Aquí puedes agregar enlaces a tus perfiles de redes sociales */}
            <ul>
              <li>
                <a href={facebookPageUrl} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i> Facebook
                </a>

              </li>
              <li>
                <a href={instagramPageUrl} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
              {/* Agrega más redes sociales según sea necesario */}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Cortinas Metálicas Ramirez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
                
