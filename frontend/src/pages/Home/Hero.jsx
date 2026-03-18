import './styles/Hero.css';
import sunLogo from '../../assets/icons/SunTattooLogo.svg';

export default function Hero() {
  const videoPoster = "https://res.cloudinary.com/dvkwtib0o/video/upload/so_0,f_auto,q_auto/v1773480113/Sin_t%C3%ADtulo_2_l5eikt.jpg";
  const videoSrc = "https://res.cloudinary.com/dvkwtib0o/video/upload/v1773480113/Sin_t%C3%ADtulo_2_l5eikt.mp4";

  return (
    <section className="hero-section">
      <div className="hero-media">
        <video 
          src={videoSrc}
          poster={videoPoster}
          autoPlay 
          loop 
          muted 
          playsInline
          crossOrigin="anonymous"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className="hero-overlay">
        <img 
          src={sunLogo} 
          alt="Sun Tattoo Logo" 
          className="hero-logo" 
          fetchPriority="high"
        />
        <p className="hero-subtitle">Arte y precisión en cada trazo</p>
      </div>
    </section>
  );
}