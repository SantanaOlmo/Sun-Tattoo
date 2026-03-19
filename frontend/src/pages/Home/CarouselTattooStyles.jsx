import React from 'react';
import ButtonPrimary from '../../components/common/ButtonPrimary';
import './styles/TattooStyles.css';

const STYLES_DATA = [
  { 
    id: 1, 
    title: "Realismo", 
    img: "https://res.cloudinary.com/dvkwtib0o/image/upload/f_auto,q_auto:eco,w_900/v1773662585/La-pirateria-tattoo01-5_hn02k8.webp" 
  },
  { 
    id: 2, 
    title: "Tradicional", 
    img: "https://res.cloudinary.com/dvkwtib0o/image/upload/f_auto,q_auto:eco,w_900/v1773661870/a635607b036d59321b9885ae1e3ef6e2_sjdfz8.jpg" 
  },
  { 
    id: 3, 
    title: "Minimalista", 
    img: "https://res.cloudinary.com/dvkwtib0o/image/upload/f_auto,q_auto:eco,w_900/v1773663374/Sandbox-Blog-images-min_qqbyxn.png" 
  },
];

export default function CarouselTattooStyles() {
  return (
    <section className="styles-triptych-container">
      {STYLES_DATA.map((style) => (
        <div key={style.id} className="style-item group">
          <div className="style-image-wrapper">
            <img 
              src={style.img} 
              alt={style.title} 
              crossOrigin="anonymous"
              loading="lazy"
            />
          </div>
          
          <div className="style-overlay">
            <h2 className="style-title">
              {style.title}
            </h2>
            
            <div className="style-info">
              <ButtonPrimary onClick={() => console.log("Ver estilo:", style.title)}>
                Ver Galería
              </ButtonPrimary>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}