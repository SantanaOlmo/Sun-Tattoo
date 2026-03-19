import React from 'react';
import googleLogo from '../../assets/icons/DeviconGoogle.svg';
import Star from '../../assets/icons/MajesticonsStar.svg';
import './styles/ReviewCard.css';

export default function ReviewCard({ name, text }) {
  return (
    <div className="google-review-card">
      
      {/* Profile and Header */}
      <div className="review-header-wrapper">
        <div className="review-header" style={{ marginLeft: 0 }}>
          <div className="name-badge-group">
            <h4 className="review-name text-lg">
              {name}
            </h4>
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