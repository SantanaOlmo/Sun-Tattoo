import React, { useState, useCallback } from 'react';
import SVG_show from './SVG_show'; 

const SVG_reader = ({ onPartsChange }) => {
  const [hoveredPart, setHoveredPart] = useState("");
  const [selectedParts, setSelectedParts] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX + 15, y: e.clientY + 15 });
  }, []);

  const getPartId = (e) => {
    const element = e.target.closest('path') || e.target.closest('g');
    const id = element?.id;
    return (id && id !== "Capa_1") ? id : null;
  };

  const handleMouseEnter = (e) => {
    const id = getPartId(e);
    if (id) setHoveredPart(id.replace(/_/g, ' '));
  };

  const handleMouseLeave = () => setHoveredPart("");

  const handleInternalClick = (e) => {
    const id = getPartId(e);
    if (!id) return;

    setSelectedParts((prev) => {
      const newSelection = prev.includes(id) 
        ? prev.filter(p => p !== id) 
        : [...prev, id];

      if (onPartsChange) {
        onPartsChange(newSelection.map(item => item.replace(/_/g, ' ')).join(', '));
      }
      return newSelection;
    });
  };

  return (
    <div 
      className="relative w-full h-full cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      onClick={handleInternalClick}
    >
      {hoveredPart && (
        <div style={{
          position: 'fixed', 
          top: mousePos.y, 
          left: mousePos.x,
          backgroundColor: '#0084ff',
          color: '#fff', 
          padding: '4px 10px',
          borderRadius: '4px', 
          pointerEvents: 'none', 
          zIndex: 9999,
          textTransform: 'capitalize', 
          fontSize: '11px',
          fontWeight: 'bold',
          whiteSpace: 'nowrap'
        }}>
          {hoveredPart}
        </div>
      )}

      <SVG_show selectedParts={selectedParts} />
    </div>
  );
};

export default SVG_reader;