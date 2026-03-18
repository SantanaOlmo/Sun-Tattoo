import React from 'react';
import googleLogo from '../../assets/icons/DeviconGoogle.svg';
import Star from '../../assets/icons/MajesticonsStar.svg';
import './styles/ReviewCard.css';

export default function ReviewCard({ name, text }) {
  return (
    <div className="google-review-card">
      
      {/* Nombre */}
      <h4 className="review-name tracking-normal text-lg font-semibold">
        {name}
      </h4>

      {/* Estrellas */}
      <div className="review-stars flex flex-row items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <img
            key={i}
            src={Star}
            alt="Star"
            className="w-6 h-6 object-contain"
          />
        ))}
      </div>

      {/* Texto */}
      <div className="review-content">
        <p className="review-text italic text-sm leading-relaxed text-gray-600">
          "{text}"
        </p>
      </div>

      {/* Footer con logo */}
      <div className="review-footer">
        <img src={googleLogo} alt="Google" className="w-6 h-6 object-contain" />
      </div>

    </div>
  );
}