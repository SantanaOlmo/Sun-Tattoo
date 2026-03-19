import React, { useState, useRef } from 'react';
import ReviewCard from './ReviewCard';
import arrowLeft from '../../assets/icons/chevron-chevron-left-left-svgrepo-com.svg';
import arrowRight from '../../assets/icons/chevron-chevron-right-right-svgrepo-com.svg';
import SectionTitle from '../../components/common/SectionTitle';
import './styles/ReviewsSection.css';

const REVIEWS = [
  {
    name: "Chari Ortega Ibañez",
    rating: 5,
    text: "Hoy he ido a ponerme un piercing en la nariz y dos argollas en la oreja y me ha atendido Diana. Una gran profesional que me ha tratado con mucho tacto y delicadeza. Lo recomiendo 100%.",
    date: "Hace 2 meses"
  },
  {
    name: "Marina",
    rating: 5,
    text: "Fui para hacerme un piercing en la oreja y no pude dar con mejor profesional, Dani gracias por tu paciencia y tu trato, amenazo con volver!!!!!",
    date: "Hace 4 meses"
  },
  {
    name: "Álvaro G.",
    rating: 5,
    text: "Increíble trato y limpieza. El estudio es de lo mejor de Sevilla, repetiré seguro para mi próximo tattoo.",
    date: "Hace 1 mes"
  },
  {
    name: "Rocio Ruiz",
    rating: 5,
    text: "Hemos ido hoy a hacernos el piercing de la nariz, yo y mi sobrina. El trato de Diana excepcional, una gran profesional sin duda. Nos ha indicado cómo cuidarnoslo y además la tranquilidad que te da cuando te dice que cualquier cosa que no dudemos en contactar con ella, sin duda volveremos a repetir!",
    date: "Hace 4 meses"
  },
  {
    name: "Nuria Rubio",
    rating: 5,
    text: "Vine con mi pareja para que nos revisaran un piercing debido a que anteriormente en otro estudio nos dieron complicaciones, y ambas salimos super contentas del local. Dani fue muy amable, nos resolvió todas las dudas y el problema y ahora tenemos la perforación mucho mejor. 100% recomendado!",
    date: "Hace 4 meses"
  },
  {
    name: "Alba Maria Lopez Ramos",
    rating: 5,
    text: "Fui con mi amiga a hacernos un tatuaje improvisado y nos dieron cita al momento. El trato maravilloso y ambas súper contentas con el resultado de los tatuajes. Muchísimas gracias por todo, Lucía!!",
    date: "Hace 4 meses"
  }
];

const btnStyle = {
  flexShrink: 0,
  width: '3rem',
  height: '3rem',
  borderRadius: '50%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.3s',
  zIndex: 10,
};

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const wheelTimeout = useRef(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const total = REVIEWS.length;

  const prev = () => setCurrent(i => (i - 1 + total) % total);
  const next = () => setCurrent(i => (i + 1) % total);

const handleWheel = (e) => {
  e.stopPropagation();
  if (wheelTimeout.current) return;
  if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 30) {
    e.preventDefault();
    if (e.deltaX > 0) next();
    else prev();
    wheelTimeout.current = setTimeout(() => {
      wheelTimeout.current = null;
    }, 600);
  }
};

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
    if (Math.abs(dx) > 40 && dy < 60) {
      dx < 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const getCardStyle = (index) => {
    const diff = (index - current + total) % total;
    const normalizedDiff = diff > total / 2 ? diff - total : diff;

    if (normalizedDiff === 0) {
      return {
        transform: 'translateX(0) scale(1)',
        zIndex: 10,
        opacity: 1,
        filter: 'none',
        pointerEvents: 'auto',
      };
    } else if (normalizedDiff === 1 || normalizedDiff === -(total - 1)) {
      return {
        transform: 'translateX(70%) scale(0.82)',
        zIndex: 5,
        opacity: 0.5,
        filter: 'brightness(0.5)',
        pointerEvents: 'none',
      };
    } else if (normalizedDiff === -1 || normalizedDiff === (total - 1)) {
      return {
        transform: 'translateX(-70%) scale(0.82)',
        zIndex: 5,
        opacity: 0.5,
        filter: 'brightness(0.5)',
        pointerEvents: 'none',
      };
    } else {
      return {
        transform: 'translateX(0) scale(0.7)',
        zIndex: 1,
        opacity: 0,
        pointerEvents: 'none',
      };
    }
  };

  return (
    <section className="reviews-section-wrapper" style={{ padding: '2rem 0 4rem 0' }}>
      {/* Flechas + Stage */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        padding: '0 2rem',
      }}>

        {/* Flecha izquierda */}
        <button onClick={prev} style={btnStyle} aria-label="Anterior">
          <img
            src={arrowLeft}
            alt="Prev"
            style={{ width: '1.5rem', height: '1.5rem', filter: 'brightness(0) invert(1)' }}
          />
        </button>

        {/* Stage */}
        <div
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '600px',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
          }}
        >
          {/* Card fantasma para dar altura al stage */}
          <div style={{ visibility: 'hidden', pointerEvents: 'none' }}>
            <ReviewCard {...REVIEWS[0]} />
          </div>

          {REVIEWS.map((rev, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: 0,
                width: '100%',
                transition: 'transform 0.4s ease, opacity 0.4s ease, filter 0.4s ease',
                ...getCardStyle(index),
              }}
            >
              <ReviewCard {...rev} />
            </div>
          ))}
        </div>

        {/* Flecha derecha */}
        <button onClick={next} style={btnStyle} aria-label="Siguiente">
          <img
            src={arrowRight}
            alt="Next"
            style={{ width: '1.5rem', height: '1.5rem', filter: 'brightness(0) invert(1)' }}
          />
        </button>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: i === current ? 'white' : 'rgba(255,255,255,0.3)',
              width: i === current ? '1rem' : '0.5rem',
              height: '0.5rem',
              padding: 0,
            }}
            aria-label={`Ir a reseña ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}