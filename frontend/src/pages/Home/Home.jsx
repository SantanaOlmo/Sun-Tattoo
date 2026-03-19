import React, { Suspense, lazy } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Hero from './Hero';
import Carousel from '../../components/common/Carousel';
import Card from '../../components/common/Card';
import ArtistCard from '../../components/common/ArtistCard';
import ProductsSection from './ProductSection';
import './styles/Home.css';
import budgetIcon from '../../assets/icons/budget.svg'; 
import News from '../../components/common/News';
import SectionTitle from '../../components/common/SectionTitle';

// --- COMPONENTES CON LAZY LOADING (Rompen la cadena crítica de carga) ---
const Sidebar = lazy(() => import('../../components/common/Sidebar'));
const ReviewsSection = lazy(() => import('./ReviewsSection'));
const CarouselTattooStyles = lazy(() => import('./CarouselTattooStyles'));
const BudgetForm = lazy(() => import('../../components/forms/BudgetForm'));

export default function Home() {
  return (
    <div className="home-page overflow-hidden">
      {/* 1. Header y Hero: Carga inmediata (Prioridad LCP) */}
      <Header />
      <Hero />
      
      {/* 2. Sección de Productos/Categorías */}
      <section className="home-section" style={{ marginTop: '0' }}>
        <ProductsSection />
      </section>

      {/* 3. Carrusel de Trabajos: Visible rápido tras el scroll */}
      <section className="home-section">
        <SectionTitle title="Trabajos Recientes" />
        <Carousel>
        <Card 
          image="https://res.cloudinary.com/dvkwtib0o/image/upload/v1773788058/2023-12-15_ey8w2k.webp" 
          title="León Realista" 
          subtitle="Brazo completo" 
        />
        <Card 
          image="https://res.cloudinary.com/dvkwtib0o/image/upload/v1773788059/2023-11-29_c8nzpi.webp" 
          title="Geométrico" 
          subtitle="Antebrazo" 
        />
        <Card 
          image="https://res.cloudinary.com/dvkwtib0o/image/upload/v1773788018/unnamed_1_wyeqlq.webp" 
          title="Mandala" 
          subtitle="Espalda" 
        />
        <Card 
          image="https://res.cloudinary.com/dvkwtib0o/image/upload/v1773788053/2023-09-15_flhwe6.webp" 
          title="Blackwork" 
          subtitle="Pierna" 
        />
        <Card 
          image="https://res.cloudinary.com/dvkwtib0o/image/upload/v1773788017/unnamed_2_evy7rn.webp" 
          title="Ornamental" 
          subtitle="Hombro" 
        />
      </Carousel>
      </section>
      
      {/* 4. Carrusel de Estilos (Lazy): Evita Forced Reflow al cargar Swiper */}
      <Suspense fallback={<div className="h-[650px] bg-black/20" />}>
        <CarouselTattooStyles />
      </Suspense>

      {/* 5. Carrusel de Artistas */}
      <section className="home-section">
        <SectionTitle title="Nuestros Artistas" />
        <Carousel isArtist={true}>
        <ArtistCard 
          image="/images/artistas/Dani.png" 
          name="Alberto" 
          specialty="Blackwork & Dotwork" 
        />
        <ArtistCard 
          image="/images/artistas/Jesus.png" 
          name="Álvaro" 
          specialty="Realismo Sombras" 
        />
        <ArtistCard 
          image="/images/artistas/Diana.png" 
          name="Santi" 
          specialty="Tradicional Americano" 
        />
        <ArtistCard 
          image="/images/artistas/Dani.png" 
          name="Fran Sun" 
          specialty="Realismo Color" 
        />
      </Carousel>
      </section>

      {/* 6. Sidebar (Lazy) */}
      <Suspense fallback={null}>
        <Sidebar />
      </Suspense>

      {/* 7. Carrusel de Piercings 
      <Carousel title="Piercing & Jewelry">
        <Card 
          image="/images/piercing1.jpg" 
          title="Septum" 
          subtitle="Titanio Grado Implante" 
        />
        <Card 
          image="/images/piercing1.jpg" 
          title="Nostril" 
          subtitle="Oro 14K" 
        />
      </Carousel>*/}

      <Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-500">Cargando formulario de presupuesto...</div>}>
        <section className="home-section">
          <SectionTitle 
            title="Pide presupuesto" 
            icon={budgetIcon} 
          />
          <div className="w-full flex justify-center">
            <BudgetForm />
          </div>
        </section>
      </Suspense>

      <Suspense>
        <section className="home-section">
          <SectionTitle title="NOTICIAS" />
          <div className="w-full flex flex-col items-center overflow-hidden">
            <News />
          </div>
        </section>
      </Suspense>

      {/* 9. Reseñas (Lazy) */}
      <Suspense fallback={<div className="h-40" />}>
        <section className="home-section">
          <SectionTitle title="Lo que dicen nuestros clientes" align="center" />
          <ReviewsSection />
        </section>
      </Suspense>
      
      <Footer />
    </div>
  );
}