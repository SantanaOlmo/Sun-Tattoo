import React, { useState, useEffect, useCallback } from 'react';
import ButtonPrimary from '../../components/layout/common/ButtonPrimary';
import NavigationArrows from '../../components/layout/common/NavigationArrows';

const STYLES_DATA = [
  { id: 1, title: "Realismo", img: "https://res.cloudinary.com/dvkwtib0o/image/upload/f_auto,q_auto:eco,w_900/v1773662585/La-pirateria-tattoo01-5_hn02k8.webp" },
  { id: 2, title: "Tradicional", img: "https://res.cloudinary.com/dvkwtib0o/image/upload/f_auto,q_auto:eco,w_900/v1773661870/a635607b036d59321b9885ae1e3ef6e2_sjdfz8.jpg" },
  { id: 3, title: "Minimalista", img: "https://res.cloudinary.com/dvkwtib0o/image/upload/f_auto,q_auto:eco,w_900/v1773663374/Sandbox-Blog-images-min_qqbyxn.png" },
];

export default function CarouselTattooStyles() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === STYLES_DATA.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? STYLES_DATA.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[650px] bg-black overflow-hidden group">
      
      {STYLES_DATA.map((style, index) => (
        <div
          key={style.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src={style.img} 
              alt={style.title} 
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
          
          <div className="absolute inset-0 z-20">
            
            {/* TÍTULO LÍQUIDO CON CLAMP */}
            <h2 
              style={{ 
                fontFamily: '"Anton SC", sans-serif',
                fontSize: 'clamp(2rem, 10vw, 5rem)' 
              }}
              className="
                absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2
                text-white 
                uppercase 
                tracking-tight 
                text-center 
                leading-[0.8] 
                drop-shadow-[0_20px_50px_rgba(0,0,0,1)]
                w-full max-w-[95%]
              "
            >
              {style.title}
            </h2>

            <div className="absolute top-[58%] left-1/2 -translate-x-1/2">
              <ButtonPrimary onClick={() => console.log("Ver estilo:", style.title)}>
                Ver más
              </ButtonPrimary>
            </div>

          </div>
        </div>
      ))}

      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="relative w-full h-full max-w-[1400px] mx-auto">
          <div onClick={prevSlide} className="pointer-events-auto">
             <NavigationArrows prevClass="cursor-pointer" nextClass="hidden" />
          </div>
          <div onClick={nextSlide} className="pointer-events-auto">
             <NavigationArrows prevClass="hidden" nextClass="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {STYLES_DATA.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              i === currentIndex ? "bg-white w-8" : "bg-white/30 w-3"
            }`}
          />
        ))}
      </div>

    </section>
  );
}