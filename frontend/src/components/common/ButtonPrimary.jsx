import React from 'react';

export default function ButtonPrimary({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        /* 1. BLOQUEO ABSOLUTO DE TAMAÑO (Usa ! para forzar) */
        /* Forzamos 13px de letra. Si el botón crece, la letra NO. */
        !text-[13px] !leading-[1] font-bold uppercase tracking-[0.1em]
        
        /* 2. PADDING FIJO Y EXAGERADO */
        /* py-5 (20px) y px-16 (50px). Esta desproporción es la clave. */
        !py-4 !px-9
        
        /* 3. FORMA Y COMPORTAMIENTO */
        rounded-full inline-flex items-center justify-center
        w-fit min-w-fit self-center mx-auto
        
        /* 4. COLORES */
        bg-[#0057e7] hover:bg-[#004bbd] text-white
        border-none shadow-md
        
        /* 5. INTERACCIÓN */
        transition-all duration-300 ease-in-out
        hover:shadow-xl hover:-translate-y-0.5 active:scale-95
        cursor-pointer whitespace-nowrap
        
        ${className}
      `}
    >
      {children}
    </button>
  );
}