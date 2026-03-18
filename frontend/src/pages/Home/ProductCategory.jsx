import './styles/ProductCategory.css';

export default function ProductCategory({ title, image, link }) {
  return (
    <a href={link} className="product-category relative overflow-hidden block">
      {/* Cambiamos backgroundImage por una etiqueta img real. 
        Esto permite al navegador precargarla mucho antes.
      */}
      <img 
        src={image} 
        alt={title}
        crossOrigin='anonymous'
        fetchPriority="high" 
        loading="eager"
        className="category-image-bg"
      />
      
      <div className="category-overlay">
        <h2 className="category-title">{title}</h2>
      </div>
    </a>
  );
}