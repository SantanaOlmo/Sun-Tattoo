import React from 'react';
import googleLogo from '../../assets/icons/DeviconGoogle.svg';
import Star from '../../assets/icons/MajesticonsStar.svg';
import './styles/ReviewCard.css';

export default function ReviewCard({ name, text }) {
  return (
    <div className="google-review-card">
      
      {/* Profile and Header */}
      <div className="review-header-wrapper">
        <div className="profile-container">
          <div className="profile-initials">
            {name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
          </div>
        </div>
        
        <div className="review-header">
          <div className="name-badge-group">
            <h4 className="review-name text-lg">
              {name}
            </h4>
            <div className="verified-badge">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              <span>Verificada</span>
            </div>
          </div>
          <div className="review-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <img
                key={i}
                src={Star}
                alt="Star"
                className="w-4 h-4 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Texto */}
      <div className="review-content">
        <span className="quote-icon top">“</span>
        <p className="review-text italic text-sm leading-relaxed text-gray-700">
          {text}
        </p>
        <span className="quote-icon bottom">”</span>
      </div>

      {/* Footer con logo */}
      <div className="review-footer">
        <img src={googleLogo} alt="Google" className="w-6 h-6 object-contain" />
      </div>

    </div>
  );
}