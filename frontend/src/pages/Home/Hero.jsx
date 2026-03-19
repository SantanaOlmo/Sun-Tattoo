import React from 'react';
import './styles/Hero.css';
import sunLogo from '../../assets/icons/SunTattooLogo.svg';

export default function Hero() {
  const videoPoster = "https://res.cloudinary.com/dvkwtib0o/video/upload/so_0,f_auto,q_auto/v1773480113/Sin_t%C3%ADtulo_2_l5eikt.jpg";
  const videoSrc = "https://res.cloudinary.com/dvkwtib0o/video/upload/v1773480113/Sin_t%C3%ADtulo_2_l5eikt.mp4";

  return (
    <section className="hero-section">
      {/* STATUS INLINE (FLOTANDO AISLADO) */}
      <div className="hero-status-inline">
        <span className="status-dot-inline"></span>
        <span className="status-text-inline">Abierto ahora</span>
      </div>

      <div className="hero-media bg-black">
        <video 
          src={videoSrc}
          poster={videoPoster}
          autoPlay 
          loop 
          muted 
          playsInline
          crossOrigin="anonymous"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover'
          }}
        />
      </div>

      <div className="hero-overlay">
        <img 
          src={sunLogo} 
          alt="Sun Tattoo Logo" 
          className="hero-logo" 
          fetchPriority="high"
        />

        {/* BUSCADOR IA MODO GOOGLE UIVERSE */}
        <div className="mt-8 w-full px-4 mx-auto" style={{ animation: 'fadeInDown 1.2s ease-out' }}>
          <div className="searchbar">
            <div className="searchbar-wrapper">
              <div className="searchbar-left">
                <span className="search-icon searchbar-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                </span>
              </div>

              <div className="searchbar-center">
                <input type="text" className="searchbar-input" maxLength="2048" name="q" autoCapitalize="off" autoComplete="off" title="Search" role="combobox" placeholder="Pregúntale a la IA" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}