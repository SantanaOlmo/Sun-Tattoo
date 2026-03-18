import ProductCategory from './ProductCategory';
import './styles/ProductsSection.css';

export default function ProductsSection() {
  return (
    <section className="products-container">
      <ProductCategory 
        title="PIERCINGS" 
        image="https://res.cloudinary.com/dvkwtib0o/image/upload/f_auto,q_auto:eco,w_400/v1773792237/ChatGPT_Image_18_mar_2026_01_03_32_pzvkow.png"        
        link="/" 
      />
      <ProductCategory 
        title="TATTOOS" 
        image="https://res.cloudinary.com/dvkwtib0o/image/upload/f_auto,q_auto:eco,w_400/v1773492225/img_tattoos_p15cj7.png"        
        link="/" 
      />
    </section>
  );
}