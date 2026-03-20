import React, { useState, useEffect, useRef } from 'react';
import ProductCategory from './ProductCategory';
import './styles/ProductsSection.css';

export default function ProductsSection() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`products-container transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <ProductCategory 
        title="PIERCINGS" 
        image="https://res.cloudinary.com/dvkwtib0o/image/upload/f_auto,q_auto:eco,w_800/v1773792237/ChatGPT_Image_18_mar_2026_01_03_32_pzvkow.png"        
        link="/" 
      />
      <ProductCategory 
        title="TATTOOS" 
        image="https://res.cloudinary.com/dvkwtib0o/image/upload/f_auto,q_auto:eco,w_800/v1773492225/img_tattoos_p15cj7.png"        
        link="/" 
      />
    </section>
  );
}