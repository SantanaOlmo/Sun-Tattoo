import React, { useState, useEffect, useRef } from 'react';
import './styles/StatsTrustSection.css';

const StatsTrustSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: 'confianza',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      number: '4.7',
      text: 'Valoración media en Google'
    },
    {
      id: 'trayectoria',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      number: '+10 Años',
      text: 'Decorando pieles en Sevilla'
    },
    {
      id: 'volumen',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          <line x1="12" y1="2" x2="12" y2="22"></line>
        </svg>
      ),
      number: '+5.000',
      text: 'Tatuajes realizados'
    }
  ];

  return (
    <section 
      className={`stats-trust-section ${isVisible ? 'is-visible' : ''}`} 
      ref={sectionRef}
    >
      {stats.map((stat, index) => (
        <div 
          key={stat.id} 
          className="stat-block"
          style={{ '--delay': `${index * 0.2}s` }}
        >
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-number">{stat.number}</div>
          <div className="stat-text">{stat.text}</div>
        </div>
      ))}
    </section>
  );
};

export default StatsTrustSection;
