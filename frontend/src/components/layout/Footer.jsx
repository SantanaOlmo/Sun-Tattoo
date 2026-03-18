import React from 'react';
import SunTattooIcon from '../../assets/icons/SunTattooLogo.svg';
import SocialBar from './SocialBar';
import './styles/Footer.css';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* FILA SUPERIOR: LINKS Y MAPA */}
        <div className="footer-top-row">
          <div className="footer-links-wrapper">
            
            {/* COLUMNA 1: CONTACTO */}
            <div className="footer-column">
              <h3>Contacto</h3>
              <div className="footer-info-item">
                <span className="icon">✉</span>
                <a href="mailto:info@suntattoosevilla.es">info@suntattoosevilla.es</a>
              </div>
              <div className="footer-info-item">
                <span className="icon">📞</span>
                <a href="tel:+34954577242">954 57 72 42</a>
              </div>
            </div>

            {/* COLUMNA 2: NAVEGACIÓN */}
            <div className="footer-column">
              <h3>Información útil</h3>
              <ul>
                <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
                <li><a href="/mapa-sitio">Mapa del sitio</a></li>
                <li><a href="/cookies">Cookies</a></li>
                <li><a href="/faq">Preguntas frecuentes</a></li>
              </ul>
            </div>

            {/* COLUMNA 3: REDES SOCIALES */}
            <div className="footer-column">
              <div className="footer-social-container">
                <SocialBar />
              </div>
            </div>
          </div>

          {/* COLUMNA MAPA */}
          <div className="footer-map-section">
            <h3>Ubicación</h3>
            <div className="map-placeholder">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.123456789!2d-5.975!3d37.385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIzJzA2LjAiTiA1wrA1OCcyNi40Ilc!5e0!3m2!1ses!2ses!4v123456789" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Mapa Sun Tattoo Sevilla"
              ></iframe>
            </div>
            <p className="address-text">
              Luis Montoto, 105 -<br />
              Galería Comercial (Local 22)<br />
              41007 Sevilla
            </p>
          </div>
        </div>

        {/* FILA MEDIA: LOGO */}
        <div className="footer-logo-row">
          <img src={SunTattooIcon} alt="Sun Tattoo Logo" className="footer-main-logo" />
        </div>

        {/* LÍNEA DIVISORA */}
        <div className="footer-divider-container">
          <div className="footer-divider-line"></div>
        </div>

        {/* FILA FINAL: COPYRIGHT */}
        <div className="footer-bottom">
          <p>© 2026 - SUN TATTOO SEVILLA</p>
        </div>

      </div>
    </footer>
  );
}