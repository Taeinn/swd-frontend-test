// src/components/ShapeControl.tsx
import React, { useState } from 'react';

const ShapeControl = () => {
  const [shapePosition, setShapePosition] = useState({ top: 0, left: 0 });
  const [shapeRotation, setShapeRotation] = useState(0);

  const moveShape = () => {
    setShapeRotation(shapeRotation + 90);  // Rotate 90 degrees to the left
  };

  const movePosition = () => {
    setShapePosition({ top: shapePosition.top === 0 ? 100 : 0, left: shapePosition.left === 0 ? 100 : 0 });
  };

  const randomizePosition = () => {
    setShapePosition({ top: Math.random() * 100, left: Math.random() * 100 });
  };

  return (
    <div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#FFA200',
          position: 'absolute',
          top: `${shapePosition.top}px`,
          left: `${shapePosition.left}px`,
          transform: `rotate(${shapeRotation}deg)`,
        }}
      ></div>
      <button onClick={moveShape}>Move Shape</button>
      <button onClick={movePosition}>Move Position</button>
      <button onClick={randomizePosition}>Randomize Position</button>
    </div>
  );
};

export default ShapeControl;