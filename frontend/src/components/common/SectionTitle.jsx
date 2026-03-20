import React from 'react';

export default function SectionTitle({ 
  title, 
  icon, 
  align = 'left', 
  className = '' 
}) {
  const isCenter = align === 'center';
  
  // Alineación interna del texto/icono sin márgenes extra
  const alignmentClasses = isCenter 
    ? 'justify-center text-center' 
    : 'justify-start text-left';

  return (
    <div className={`w-full ${className}`}>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <div className={`w-full flex items-center ${alignmentClasses}`}>
          {icon && (
            <img 
              src={icon} 
              alt="Icono" 
              className="w-8 h-8 mr-6 shrink-0 transition-all duration-300" 
              style={{ filter: 'var(--icon-filter)' }}
              aria-hidden="true" 
            />
          )}
          <h2 className="text-[var(--text-h)] md:text-4xl text-xl font-bold uppercase tracking-tight md:tracking-tighter m-0 transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis select-none cursor-default">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
