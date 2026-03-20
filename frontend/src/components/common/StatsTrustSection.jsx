import React from 'react';
import './styles/StatsTrustSection.css';

const StatsTrustSection = () => {
  return (
    <section className="stats-trust-section">
      {/* Bloque 1: Confianza */}
      <div className="stat-block">
        <div className="stat-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <div className="stat-number">4.7</div>
        <div className="stat-text">Valoración media en Google</div>
      </div>

      {/* Bloque 2: Trayectoria */}
      <div className="stat-block">
        <div className="stat-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>
        <div className="stat-number">+10 Años</div>
        <div className="stat-text">Decorando pieles en Sevilla</div>
      </div>

      {/* Bloque 3: Volumen */}
      <div className="stat-block">
        <div className="stat-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            <line x1="12" y1="2" x2="12" y2="22"></line>
          </svg>
        </div>
        <div className="stat-number">+5.000</div>
        <div className="stat-text">Tatuajes realizados</div>
      </div>
    </section>
  );
};

export default StatsTrustSection;
