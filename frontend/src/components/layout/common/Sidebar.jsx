import React, { useState, Suspense, lazy } from 'react';
import './styles/Sidebar.css';
import budgetIcon from '../../../assets/icons/budget.svg'; 

// 1. CARGA PEREZOSA: El formulario solo se descarga si el usuario abre el Sidebar
const BudgetForm = lazy(() => import('../../forms/BudgetForm'));

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    // 2. EVITAR REFLOW: En lugar de useEffect, usamos clases CSS en el body si es necesario,
    // pero lo ideal es manejar el overflow con una clase fija en el CSS.
    if (!isOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  };

  return (
    <>
      <button 
        className={`sidebar-trigger ${isOpen ? 'active' : ''}`} 
        onClick={toggleSidebar}
        aria-label="Abrir formulario de presupuesto"
      >
        <span className="trigger-icon">
           <img src={budgetIcon} alt="Icono Presupuesto" />
        </span>
      </button>

      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      <aside className={`sidebar-panel ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-header-left">
            <img src={budgetIcon} alt="Icono Presupuesto" className="header-icon" />
            <h2 className="sidebar-header-title">Pedir presupuesto</h2>
          </div>
          <button className="close-btn" onClick={toggleSidebar}>×</button>
        </div>
        
        <div className="sidebar-content">
          {/* 3. SOLO RENDERIZAR SI ESTÁ ABIERTO: Ahorra muchísima CPU */}
          {isOpen && (
            <Suspense fallback={<div className="p-10 text-white">Cargando formulario...</div>}>
              <BudgetForm />
            </Suspense>
          )}
        </div>
      </aside>
    </>
  );
}