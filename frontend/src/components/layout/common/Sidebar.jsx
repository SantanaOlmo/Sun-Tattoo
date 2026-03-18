import React, { useState, Suspense, lazy, useEffect } from 'react';
import './styles/Sidebar.css';
import budgetIcon from '../../../assets/icons/budget.svg'; 

// 1. CARGA PEREZOSA: El formulario solo se descarga si el usuario abre el Sidebar
const BudgetForm = lazy(() => import('../../forms/BudgetForm'));

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para controlar el scroll del body/html
  const handleScrollLock = (shouldLock) => {
    if (shouldLock) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  };

  const toggleSidebar = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    handleScrollLock(nextState);
  };

  // Limpieza de seguridad al desmontar el componente
  useEffect(() => {
    return () => {
      document.documentElement.classList.remove('no-scroll');
    };
  }, []);

  return (
    <>
      {/* Botón Disparador */}
      <button 
        className={`sidebar-trigger ${isOpen ? 'active' : ''}`} 
        onClick={toggleSidebar}
        aria-label={isOpen ? "Cerrar presupuesto" : "Abrir presupuesto"}
      >
        <span className="trigger-icon">
           <img src={budgetIcon} alt="Icono Presupuesto" />
        </span>
      </button>

      {/* Overlay con Blur */}
      {isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}

      {/* Panel Lateral */}
      <aside className={`sidebar-panel ${isOpen ? 'open' : ''}`}>
        
        {/* Header Fijo */}
        <div className="sidebar-header">
          <div className="sidebar-header-left">
            <img src={budgetIcon} alt="Icono Presupuesto" className="header-icon" />
            <h2 className="sidebar-header-title">Pedir presupuesto</h2>
          </div>
          <button className="close-btn" onClick={toggleSidebar}>×</button>
        </div>
        
        {/* Contenedor con Scroll */}
        <div className="sidebar-content">
          {isOpen && (
            <Suspense fallback={
              <div className="flex items-center justify-center h-full text-white">
                <p>Cargando formulario...</p>
              </div>
            }>
              <BudgetForm />
            </Suspense>
          )}
        </div>

      </aside>
    </>
  );
}