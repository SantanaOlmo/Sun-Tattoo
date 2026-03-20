import React, { useState, useEffect } from 'react';
import SunTattooIcon from '../../assets/icons/SunTattooLogo.svg';
import ContactPanel from './ContactPanel';
import SocialBar from './SocialBar';
import './styles/Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleMenu = () => {
    const nextState = !isMenuOpen;
    setIsMenuOpen(nextState);
    if (isContactOpen) setIsContactOpen(false);
    
    // Añadimos clase global para que otros componentes (como el Sidebar) reaccionen
    document.documentElement.classList.toggle('mobile-menu-open', nextState);
  };

  const toggleContact = (e) => {
    e.preventDefault();
    setIsContactOpen(!isContactOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Si el click no fue en el header ni en el panel
      if (isContactOpen && !e.target.closest('.custom-header')) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isContactOpen]);

  return (
    <header className={`custom-header ${isContactOpen ? 'contact-open' : ''}`}>
      <div className="header-container">
        
        {/* Logo a la izquierda - Usando la misma importación que el Footer */}
        <div className="logo-section">
          <a href="/" className="logo-link">
            <span className="sr-only">Home</span>
            <img 
              src={SunTattooIcon} 
              alt="Sun Tattoo Logo" 
              className={`header-logo-img ${isMenuOpen ? 'menu-open-logo' : ''}`} 
            />
          </a>
        </div>

        {/* Navegación central */}
        <nav className={`nav-menu ${isMenuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
          <ul className="nav-list">
            <li><a href="#artistas" onClick={() => setIsMenuOpen(false)}>Artistas</a></li>
            <li><a href="#galeria" onClick={() => setIsMenuOpen(false)}>Galería</a></li>
            <li><a href="#contacto" onClick={toggleContact} className={isContactOpen ? 'active' : ''}>Contacto</a></li>
            <li><a href="#presupuesto" onClick={() => setIsMenuOpen(false)}>Presupuesto</a></li>
          </ul>

          {/* REDES SOCIALES MÓVIL AL FONDO */}
          <div className="mobile-social-wrapper">
            <SocialBar />
          </div>
        </nav>

        {/* Sección de Acción - Sin login/registro */}
        <div className="actions-section">
          {/* Añadimos aria-label para que los lectores de pantalla sepan qué hace el botón */}
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'is-active' : ''}`} 
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>
      
      {/* Panel de Contacto Desplegable */}
      <ContactPanel 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </header>
  );
}