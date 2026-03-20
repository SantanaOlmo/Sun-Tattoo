import React, { useRef, Children } from 'react';
import './styles/Carousel.css';
import arrowLeft from '../../assets/icons/chevron-chevron-left-left-svgrepo-com.svg';
import arrowRight from '../../assets/icons/chevron-chevron-right-right-svgrepo-com.svg';

export default function Carousel({ children, title, isArtist = false, viewAllLink = null }) {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    if (!current || !current.children.length) return;

    const firstItem = current.children[0];
    const itemWidth = firstItem.offsetWidth;
    const gap = parseInt(getComputedStyle(current).gap) || 0;
    
    const scrollAmount = window.innerWidth <= 768 ? (itemWidth + gap) : (current.clientWidth * 0.7);
    
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const btnStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.3s',
  };

  return (
    <div className={`carousel-wrapper overflow-hidden ${isArtist ? 'pb-20 pt-4' : 'pb-10 pt-2'}`}>
      <div className="carousel-main flex items-center w-full min-h-[300px]"> 
        {/* Lado Izquierdo: Div con flecha centrada */}
        <div className="carousel-side-nav shrink-0">
          <button onClick={() => handleScroll('left')} style={btnStyle} aria-label="Anterior">
            <img src={arrowLeft} alt="Anterior" className="carousel-nav-icon w-8 h-8 transition-opacity" />
          </button>
        </div>

        {/* Centro: Carrusel puramente scrollable */}
        <div 
          className={`
            carousel-container 
            grow flex overflow-x-auto
            scrollbar-hide 
            ${isArtist ? 'py-14' : 'py-4'}
            will-change-scroll
          `}
          ref={scrollRef}
        >
          {Children.map(children, (child) => (
            <div className="shrink-0">
              {child}
            </div>
          ))}

          {viewAllLink && (
            <div className="shrink-0 flex items-center h-full px-10">
              <a href={viewAllLink} className="view-more-text">
                Ver más
              </a>
            </div>
          )}
        </div>

        {/* Lado Derecho: Div con flecha centrada */}
        <div className="carousel-side-nav shrink-0">
          <button onClick={() => handleScroll('right')} style={btnStyle} aria-label="Siguiente">
            <img src={arrowRight} alt="Siguiente" className="carousel-nav-icon w-8 h-8 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
}