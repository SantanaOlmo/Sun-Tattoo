import React from 'react';
import arrowLeft from '../../assets/icons/chevron-chevron-left-left-svgrepo-com.svg';
import arrowRight from '../../assets/icons/chevron-chevron-right-right-svgrepo-com.svg';

export default function NavigationArrows({ prevClass, nextClass, className = "" }) {
  const btnStyle = `
    z-50 flex items-center justify-center 
    w-12 h-12 rounded-full bg-black/50 hover:bg-[#0084ff] 
    transition-all duration-300 cursor-pointer 
    backdrop-blur-sm select-none absolute !top-1/2 !-translate-y-1/2
  `;

  // 👇 aquí cambias el tamaño del icono
  const iconStyle = "w-6 h-6 object-contain filter brightness-0 invert transition-transform group-hover:scale-110";

  return (
    <>
      <div className={`${prevClass} !left-6 ${btnStyle} ${className}`}>
        <img src={arrowLeft} alt="Prev" className={iconStyle} />
      </div>

      <div className={`${nextClass} !right-6 ${btnStyle} ${className}`}>
        <img src={arrowRight} alt="Next" className={iconStyle} />
      </div>
    </>
  );
}