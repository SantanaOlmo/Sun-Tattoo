import SunTattooIcon from '../../assets/icons/SunTattooLogo.svg';
import './styles/Header.css';

export default function Header() {
  return (
    <header className="custom-header">
      <div className="header-container">
        
        {/* Logo a la izquierda - Usando la misma importación que el Footer */}
        <div className="logo-section">
          <a href="/" className="logo-link">
            <span className="sr-only">Home</span>
            <img 
              src={SunTattooIcon} 
              alt="Sun Tattoo Logo" 
              className="header-logo-img" 
            />
          </a>
        </div>

        {/* Navegación central */}
        <nav className="nav-menu" aria-label="Navegación principal">
          <ul className="nav-list">
            <li><a href="#artistas">Artistas</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#presupuesto">Presupuesto</a></li>
          </ul>
        </nav>

        {/* Sección de Acción - Sin login/registro */}
        <div className="actions-section">
          {/* Añadimos aria-label para que los lectores de pantalla sepan qué hace el botón */}
          <button className="mobile-menu-btn" aria-label="Abrir menú de navegación">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}