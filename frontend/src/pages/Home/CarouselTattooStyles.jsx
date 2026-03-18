import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ButtonPrimary from '../../components/layout/common/ButtonPrimary';
import NavigationArrows from '../../components/layout/common/NavigationArrows'; 

import 'swiper/css';
import 'swiper/css/pagination';

const STYLES_DATA = [
  { 
    id: 1, 
    title: "Realismo Black & Grey", 
    img: "https://res.cloudinary.com/dvkwtib0o/image/upload/f_auto,q_auto:eco,w_900/v1773662585/La-pirateria-tattoo01-5_hn02k8.webp" 
  },
  { 
    id: 2, 
    title: "Tradicional / Old School", 
    img: "https://res.cloudinary.com/dvkwtib0o/image/upload/f_auto,q_auto:eco,w_900/v1773661870/a635607b036d59321b9885ae1e3ef6e2_sjdfz8.jpg" 
  },
  { 
    id: 3, 
    title: "Minimalista / Fine Line", 
    img: "https://res.cloudinary.com/dvkwtib0o/image/upload/f_auto,q_auto:eco,w_900/v1773663374/Sandbox-Blog-images-min_qqbyxn.png" 
  },
];

export default function CarouselTattooStyles() {
  return (
    <section className="relative w-full h-[650px] bg-black overflow-hidden group">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        // Desactivamos todo lo que consume CPU innecesariamente
        observer={false}
        observeParents={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          renderBullet: (index, className) => `<span class="${className} !cursor-default"></span>`
        }}
        navigation={{
          prevEl: '.nav-custom-tattoo-prev',
          nextEl: '.nav-custom-tattoo-next',
        }}
        className="w-full h-full"
      >
        {STYLES_DATA.map((style) => (
          <SwiperSlide key={style.id} className="relative w-full h-full">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img 
                src={style.img} 
                alt={style.title} 
                className="w-full h-full object-cover"
                loading="lazy" 
                crossOrigin="anonymous"
              />
            </div>
            
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center translate-y-4">
              <h2 className="!text-white text-5xl md:text-[120px] font-black uppercase tracking-tighter text-center !leading-[0.8] mb-12 drop-shadow-[0_10px_30px_rgba(0,0,0,1)]">
                {style.title}
              </h2>
              <ButtonPrimary onClick={() => console.log("Ver estilo:", style.title)}>
                Ver más
              </ButtonPrimary>
            </div>
          </SwiperSlide>
        ))}

        <NavigationArrows 
          prevClass="nav-custom-tattoo-prev" 
          nextClass="nav-custom-tattoo-next" 
        />
      </Swiper>
    </section>
  );
}