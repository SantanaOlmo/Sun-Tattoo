import React, { useState, Suspense, lazy } from 'react';
import './styles/BudgetForm.css';
import ButtonPrimary from '../common/ButtonPrimary';

// Mantenemos el Lazy Load para romper la cadena crítica de 62KB
const SVG_reader = lazy(() => import('./SVG_reader'));

export default function BudgetForm() {
  const [price, setPrice] = useState(50);
  const [zona, setZona] = useState("");

  const handlePartsChange = (textoZonas) => {
    setZona(textoZonas);
  };

  return (
    <div className="budget-form-container">
      <div className="budget-content-wrapper">
        
        {/* SECCIÓN DEL SVG (Blanca) */}
        <div className="body-visualizer">
            <Suspense fallback={<div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>Cargando modelo...</div>}>
              <SVG_reader onPartsChange={handlePartsChange} />
            </Suspense>
          </div>

        {/* FORMULARIO DE DATOS (Negro) */}
        <form className="budget-form" onSubmit={(e) => e.preventDefault()}>
          
          <div className="form-group">
            <label htmlFor="tattoo-style">Tipo de dibujo</label>
            <input id="tattoo-style" type="text" placeholder="Ej: Realista, Tradicional..." />
          </div>

          <div className="form-group">
            <label htmlFor="body-zone">Zona del cuerpo</label>
            <input 
              id="body-zone"
              type="text" 
              placeholder="Clica en las zonas del cuerpo..." 
              value={zona} 
              onChange={(e) => setZona(e.target.value)} 
            />
            <small style={{ color: '#666', marginTop: '4px', display: 'block' }}>
              Puedes seleccionar varias partes en el modelo.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="tattoo-size">Tamaño</label>
            <input id="tattoo-size" type="text" placeholder="Ej: 10cm x 10cm" />
          </div>

          {/* ESTE ES EL QUE MARCABA LIGHTHOUSE */}
          <div className="form-group">
            <label htmlFor="price-range">Rango de precio: <span className="price-value">{price}€</span></label>
            <input 
              id="price-range"
              type="range" 
              min="50" 
              max="1000" 
              step="10" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              className="price-slider"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Explícanos qué quieres</label>
            <textarea id="description" rows="4" placeholder="Cuéntanos tu idea..."></textarea>
          </div>

          <div className="upload-section">
            <div className="upload-box" style={{ position: 'relative' }}>
              <span className="plus-icon" aria-hidden="true">+</span>
              <input type="file" hidden id="file-upload" />
              {/* Este ya lo tenías bien asociado con htmlFor */}
              <label htmlFor="file-upload" className="upload-label" style={{ cursor: 'pointer', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <span className="sr-only">Subir imágenes de referencia</span>
              </label>
            </div>
            <p className="upload-text">Sube imágenes de referencia</p>
          </div>

          <ButtonPrimary type="submit">Solicitar Presupuesto</ButtonPrimary>
        </form>
      </div>
    </div>
  );
}