import React from 'react';
import arrowLeft from '../../assets/icons/chevron-chevron-left-left-svgrepo-com.svg';
import arrowRight from '../../assets/icons/chevron-chevron-right-right-svgrepo-com.svg';

export default function NavigationArrows({ prevClass, nextClass, className = "" }) {
  const btnStyle = `
    z-50 flex items-center justify-center 
    transition-all duration-300 cursor-pointer 
    select-none absolute !top-1/2 !-translate-y-1/2
  `;

  // 👇 aquí cambias el tamaño del icono
  const iconStyle = "w-10 h-10 object-contain transition-transform group-hover:scale-110";
  const iconFilter = { filter: 'var(--icon-filter)' };

  return (
    <>
      <div className={`${prevClass} left-6! ${btnStyle} ${className}`}>
        <img src={arrowLeft} alt="Prev" className={iconStyle} style={iconFilter} />
      </div>

      <div className={`${nextClass} right-6! ${btnStyle} ${className}`}>
        <img src={arrowRight} alt="Next" className={iconStyle} style={iconFilter} />
      </div>
    </>
  );
}