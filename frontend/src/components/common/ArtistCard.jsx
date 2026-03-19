import React from 'react';

const ArtistCard = ({ name, specialty, image }) => {
  return (
    /* Mantenemos cursor-pointer y group para el hover individual */
    <div className="group flex flex-col items-center w-[220px] select-none cursor-pointer">
      
      {/* CARD: Contenedor de la imagen */}
      {/* Eliminado 'group-hover:shadow-[0_4px_25px_rgba(0,132,255,0.4)]'. Solo cambiamos el color del borde. */}
      <div className="relative w-full h-[280px] bg-[#1a1a1a] rounded-[20px] border-2 border-[var(--border)] transition-all duration-500 ease-out group-hover:border-[#0084ff] overflow-visible">
        
        {/* Imagen con bordes redondeados internos */}
        <div className="w-full h-full rounded-[18px] overflow-hidden">
          {/* La foto siempre es a color y se escala ligeramente en hover. */}
          <img 
            src={image || "https://via.placeholder.com/300x400"} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out"
          />
        </div>

        {/* Botón: Aparece en hover. bg-[#0084ff] y hover:bg a un tono azul más claro. */}
        <button className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[120%] opacity-0 group-hover:translate-y-1/3 group-hover:opacity-100 transition-all duration-300 ease-out w-[85%] rounded-xl bg-[#0084ff] text-white text-[10px] font-black uppercase tracking-widest py-3 px-4 shadow-2xl hover:bg-[#339dff] z-50 pointer-events-auto">
          Ver Portfolio
        </button>
      </div>

      {/* INFO: Separación mt-16 */}
      <div className="mt-16 text-center">
        {/* El nombre del artista cambia a azul en hover. */}
        <h4 className="text-[var(--text-h)] text-lg font-bold tracking-tighter uppercase transition-colors duration-300 group-hover:text-[#0084ff]">
          {name}
        </h4>
        <p className="text-[var(--text)] text-[10px] font-bold mt-1 tracking-[0.2em] uppercase">
          {specialty}
        </p>
      </div>
    </div>
  );
};

export default ArtistCard;