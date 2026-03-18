import React, { useRef, Children } from 'react';
import './styles/Carousel.css';
import NavigationArrows from './NavigationArrows';

export default function Carousel({ children, title, isArtist = false }) {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

  
    const containerWidth = current.clientWidth; 
    const scrollAmount = containerWidth * 0.8; 
    
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={`carousel-wrapper overflow-hidden ${isArtist ? 'py-20' : 'py-10'}`}>
      {title && (
        <h2 className="carousel-section-title px-12 mb-8 text-2xl font-semibold tracking-wide uppercase">
          {title}
        </h2>
      )}
      
      <div className="carousel-main relative w-full"> 
        <NavigationArrows 
          onPrev={() => handleScroll('left')} 
          onNext={() => handleScroll('right')} 
          className="!absolute !z-50" 
        />

        <div 
          className={`
            carousel-container 
            flex overflow-x-auto gap-8 
            scrollbar-hide 
            px-[80px] 
            ${isArtist ? 'py-14' : 'py-4'}
            /* Añadimos will-change para que el navegador use la GPU */
            will-change-scroll
          `}
          ref={scrollRef}
          style={{ 
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch' 
          }}
        >
          {Children.map(children, (child) => (
            <div 
              className="flex-shrink-0" 
              style={{ scrollSnapAlign: 'start' }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}