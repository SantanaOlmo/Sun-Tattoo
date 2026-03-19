import React, { useRef, Children } from 'react';
import './styles/Carousel.css';
import NavigationArrows from './NavigationArrows';
import SectionTitle from './SectionTitle';

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
    <div className={`carousel-wrapper overflow-hidden ${isArtist ? 'pb-20 pt-4' : 'pb-10 pt-2'}`}>
      
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
            px-10 md:px-20 
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