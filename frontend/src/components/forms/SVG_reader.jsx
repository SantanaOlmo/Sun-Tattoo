import React, { useState, useCallback, useRef } from 'react';
import SVG_show from './SVG_show'; 

const SVG_reader = ({ onPartsChange }) => {
  const [hoveredPart, setHoveredPart] = useState("");
  const [selectedParts, setSelectedParts] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const pointerMoved = useRef(false);
  const pointerStart = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX + 15, y: e.clientY + 15 });
  }, []);

  const getPartId = (e) => {
    const target = e.target.closest('[id]');
    if (!target || target.id === 'Capa_1' || target.id === 'root') return null;

    let id = target.id;

    if (target.tagName.toLowerCase() === 'path') {
      const parentGroup = target.closest('g[id]');
      if (parentGroup && parentGroup.id !== 'Capa_1') {
        id = parentGroup.id;
      }
    }

    return id;
  };

  const handleMouseEnter = (e) => {
    const id = getPartId(e);
    if (id) setHoveredPart(id.replace(/_/g, ' '));
  };

  const handleMouseLeave = () => setHoveredPart("");

  const handlePointerDown = (e) => {
    pointerMoved.current = false;
    pointerStart.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e) => {
    const dx = Math.abs(e.clientX - pointerStart.current.x);
    const dy = Math.abs(e.clientY - pointerStart.current.y);
    if (dx > 5 || dy > 5) {
      pointerMoved.current = true;
    }
    handleMouseMove(e);
  };

  const handleInternalClick = (e) => {
    if (pointerMoved.current) return;

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
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handleInternalClick}
    >
      {hoveredPart && (
        <div style={{
          position: 'fixed', 
          top: mousePos.y, 
          left: mousePos.x,
          backgroundColor: 'var(--accent-blue)',
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