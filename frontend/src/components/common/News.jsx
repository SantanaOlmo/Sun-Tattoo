import React, { useState, useRef, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const prev = () => setCurrent(i => Math.max(0, i - 1));
  const next = () => setCurrent(i => Math.min(newsData.length - 1, i + 1));

  // Cálculo corregido: Cada slot es 100% de la ventana + el gap (24px para gap-6)
  // En móviles esto garantiza que la card 2 caiga exactamente donde estaba la card 1.
  const getTransform = () => {
    if (window.innerWidth < 640) {
      return `translateX(calc(-${current} * (100% + 24px)))`;
    } else if (window.innerWidth < 1024) {
      return `translateX(calc(-${current} * (50% + 12px)))`;
    } else {
      return `translateX(calc(-${current} * (33.33% + 16px)))`;
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`overflow-hidden transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ width: '95%', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div className="relative group/nav">
        <button 
          onClick={prev} 
          style={{...btnStyle, opacity: current === 0 ? 0 : 1, pointerEvents: current === 0 ? 'none' : 'auto'}} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hover:bg-white/10 transition-all"
          aria-label="Anterior"
        >
          <img src={arrowLeft} alt="Prev" style={{ width: '1.5rem', height: '1.5rem', filter: 'brightness(0) invert(1)' }} />
        </button>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ 
              transform: getTransform()
            }}
            id="news-slider"
          >
            {newsData.map((article) => (
              <div key={article.id} className="news-card-wrapper shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                <div className="group block relative">
                  <figure className="overflow-hidden rounded-xl relative mb-4 aspect-video">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover object-center w-full h-full bg-gray-800 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0" style={{ paddingLeft: '1.5rem', paddingBottom: '1.5rem', paddingRight: '1rem' }}>
                      <h3 
                        className="text-xl text-left font-black text-white leading-tight tracking-tight group-hover:translate-x-1 transition-transform duration-300 line-clamp-2"
                        style={{ color: '#fff' }}
                      >
                        {article.title}
                      </h3>
                    </div>
                  </figure>

                  <div className="flex items-center gap-3 mb-2 mt-4">
                    <time dateTime={article.date} className="text-[10px] font-medium text-[var(--text)] uppercase tracking-widest transition-colors duration-300">
                      {article.dateLabel}
                    </time>
                    <span className="w-1 h-1 rounded-full bg-[var(--text)] opacity-30" />
                    <span className="text-[10px] font-medium text-[var(--text)] uppercase tracking-widest transition-colors duration-300">{article.readTime}</span>
                  </div>

                  <p className="line-clamp-2 text-sm text-[var(--text)] text-left leading-relaxed transition-colors duration-300">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={next} 
          style={{...btnStyle, opacity: current >= newsData.length - 1 ? 0 : 1, pointerEvents: current >= newsData.length - 1 ? 'none' : 'auto'}} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hover:bg-white/10 transition-all"
          aria-label="Siguiente"
        >
          <img src={arrowRight} alt="Next" style={{ width: '1.5rem', height: '1.5rem', filter: 'brightness(0) invert(1)' }} />
        </button>
      </div>
    </div>
  );
};

export default News;
