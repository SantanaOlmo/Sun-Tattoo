import React, { useState, useRef } from 'react';
import arrowLeft from '../../assets/icons/chevron-chevron-left-left-svgrepo-com.svg';
import arrowRight from '../../assets/icons/chevron-chevron-right-right-svgrepo-com.svg';

const newsData = [
  {
    id: 1,
    title: "Daith piercing: ¿Efectivo contra la migraña?",
    excerpt: "¿Qué es un Daith piercing? El Daith piercing es una perforación que se realiza en el cartílago interno del pabellón auditivo, justo en un punto relacionado con la acupuntura. Algunas personas aseguran que puede ayudar a aliviar los dolores de cabeza y los síntomas asociados a la migraña.",
    category: "Nature",
    date: "2025-02-17T19:10:07.818Z",
    dateLabel: "11 Feb 2026",
    readTime: "4 min read",
    image: "https://res.cloudinary.com/dvkwtib0o/image/upload/q_auto:eco,f_auto,w_500/v1773855520/daith-piercing-position_ocikqm.webp",
    href: "#"
  },
  {
    id: 2,
    title: "Los beneficios del ayuno intermitente",
    excerpt: "El ayuno intermitente se ha convertido en una de las tendencias más populares en el mundo de la salud. Estudios recientes sugieren que puede tener beneficios más allá de la pérdida de peso, incluyendo mejoras en la salud metabólica y cognitiva.",
    category: "Health",
    date: "2026-01-20T10:00:00.000Z",
    dateLabel: "20 Ene 2026",
    readTime: "5 min read",
    image: "https://res.cloudinary.com/dvkwtib0o/image/upload/q_auto:eco,f_auto,w_500/v1773855520/daith-piercing-position_ocikqm.webp",
    href: "#"
  },
  {
    id: 3,
    title: "Meditación y neurociencia: lo que dice la ciencia",
    excerpt: "Durante años la meditación fue vista con escepticismo por la comunidad científica. Hoy, gracias a la neuroimagen, sabemos que practicarla regularmente produce cambios estructurales en el cerebro que mejoran la regulación emocional y la concentración.",
    category: "Science",
    date: "2026-02-05T08:30:00.000Z",
    dateLabel: "5 Feb 2026",
    readTime: "6 min read",
    image: "https://res.cloudinary.com/dvkwtib0o/image/upload/q_auto:eco,f_auto,w_500/v1773855520/daith-piercing-position_ocikqm.webp",
    href: "#"
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
};

const News = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const prev = () => setCurrent(i => (i - 1 + newsData.length) % newsData.length);
  const next = () => setCurrent(i => (i + 1) % newsData.length);

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

  const article = newsData[current];

  return (
    <div style={{ width: '100%', maxWidth: '42rem', margin: '0 auto', padding: '0 1rem' }}>

      {/* Título sección */}
      <h2 className="text-white text-2xl font-bold" style={{ marginBottom: '2rem' }}>
        Noticias
      </h2>

      {/* Flechas + Card */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Flecha izquierda */}
        <button onClick={prev} style={btnStyle} aria-label="Anterior">
          <img
            src={arrowLeft}
            alt="Prev"
            style={{ width: '1.5rem', height: '1.5rem', filter: 'brightness(0) invert(1)' }}
          />
        </button>

        {/* Card */}
        <a href={article.href} className="group" style={{ flex: 1, minWidth: 0 }}>
          <figure className="overflow-hidden rounded-lg relative mb-3 transition-transform duration-300 group-hover:scale-105">
            <img
              src={article.image}
              alt={article.title}
              className="object-cover object-center aspect-video w-full bg-gray-400"
            />
            <span className="absolute top-2 left-2 px-3 py-1 bg-gray-950/20 backdrop-blur-sm text-xs rounded-full text-gray-50">
              {article.category}
            </span>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            <p className="absolute inset-x-0 bottom-0 px-4 pb-3 text-lg font-semibold text-white leading-snug">
              {article.title}
            </p>
          </figure>

          <time dateTime={article.date} className="text-xs text-gray-50/50">
            {article.dateLabel}
            <span className="mx-1">⦁</span>
            {article.readTime}
          </time>

          <p className="line-clamp-2 text-sm text-gray-50 opacity-50 mt-1 group-hover:opacity-90 transition-opacity duration-300">
            {article.excerpt}
          </p>
        </a>

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
      <div className="flex justify-center gap-2" style={{ marginTop: '1.5rem' }}>
        {newsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-4 h-2 bg-white' : 'w-2 h-2 bg-white/30'
            }`}
            aria-label={`Ir a noticia ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default News;