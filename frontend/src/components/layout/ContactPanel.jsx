import React from 'react';
import './styles/ContactPanel.css';
import SocialBar from './SocialBar';

export default function ContactPanel({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={`contact-panel ${isOpen ? 'is-open' : ''}`}>
      <div className="contact-panel-container">
        <button className="close-panel" onClick={onClose} aria-label="Cerrar contacto">×</button>
        
        <div className="contact-grid">
          {/* Columna 1: Redes Sociales */}
          <div className="contact-social-section">
            <SocialBar />
          </div>

          {/* Columna 2: Información de contacto */}
          <div className="contact-info-section">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:info@suntattoo.es" className="contact-value">info@suntattoo.es</a>
            </div>
            
            <div className="contact-item">
              <span className="contact-label">Teléfono</span>
              <a href="tel:+34954123456" className="contact-value">+34 954 123 456</a>
            </div>
            
            <div className="contact-item">
              <span className="contact-label">Horario</span>
              <p className="contact-value">Lunes - Sábado<br/>10:00 - 14:00 | 17:00 - 21:00</p>
            </div>
          </div>

          {/* Columna 3: Mapa */}
          <div className="contact-map-section">
            <div className="map-frame">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.123456789!2d-5.987654!3d37.389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1111111111%3A0x1111111111111111!2sCalle%20Sierpes%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1234567890123" 
                width="100%" 
                height="250" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen="" 
                loading="lazy"
                title="SUNTATTOO Location"
              ></iframe>
            </div>
            <p className="contact-address">Calle Sierpes, 41004 Sevilla, España</p>
          </div>
        </div>
      </div>
    </div>
  );
}
