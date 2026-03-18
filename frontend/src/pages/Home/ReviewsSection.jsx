import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ReviewCard from './ReviewCard';
import './styles/ReviewsSection.css';

const REVIEWS = [
  {
    name: "Chari Ortega Ibañez",
    rating: 5,
    text: "Hoy he ido a ponerme un piercing en la nariz y dos argollas en la oreja y me ha atendido Diana. Una gran profesional que me ha tratado con mucho tacto y delicadeza. Lo recomiendo 100% .",
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
  }
];

export default function ReviewsSection() {
  return (
    <section className="reviews-section-wrapper py-20">
      {/* El título sí puede ir en container para alinearse con la web */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="section-title text-center text-white text-3xl font-bold uppercase tracking-widest">
          Lo que dicen nuestros clientes
        </h2>
      </div>
      
      {/* El carrusel va LIBRE de contenedores que lo estrechen */}
      <div className="single-review-swiper">
        <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          navigation={true}
          pagination={{ 
            clickable: true,
            dynamicBullets: false // Mantener todos los puntos visibles
          }}
          loop={true}           /* CLAVE: Movimiento infinito */
          mousewheel={true}
          keyboard={true}
          slidesPerView={1}
          centeredSlides={true}
          className="mySwiper"
        >
          {REVIEWS.map((rev, index) => (
            <SwiperSlide key={index}>
              <ReviewCard {...rev} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}