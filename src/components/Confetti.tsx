import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
}

const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#7A77FF', '#FF9A8B'];

const Confetti: React.FC = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  
  useEffect(() => {
    // Generate initial confetti pieces
    const initialConfetti: ConfettiPiece[] = [];
    
    for (let i = 0; i < 50; i++) {
      initialConfetti.push({
        id: i,
        x: Math.random() * 100,
        y: -Math.random() * 20, // Start above the viewport
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 0.8 + 0.3,
        rotation: Math.random() * 360
      });
    }
    
    setConfetti(initialConfetti);
    
    const animateConfetti = () => {
      setConfetti(prevConfetti => 
        prevConfetti.map(piece => ({
          ...piece,
          y: piece.y + (0.2 + Math.random() * 0.5), // Fall speed
          rotation: piece.rotation + (Math.random() * 2 - 1),
          x: piece.x + (Math.sin(piece.y * 0.1) * 0.2) // Sway left and right
        })).filter(piece => piece.y < 120) // Remove pieces that fall out of view
      );
    };
    
    // Add new confetti as pieces fall out
    const addNewConfetti = () => {
      setConfetti(prevConfetti => {
        if (prevConfetti.length < 50) {
          return [
            ...prevConfetti,
            {
              id: Date.now() + Math.random(),
              x: Math.random() * 100,
              y: -5,
              color: colors[Math.floor(Math.random() * colors.length)],
              size: Math.random() * 0.8 + 0.3,
              rotation: Math.random() * 360
            }
          ];
        }
        return prevConfetti;
      });
    };
    
    const animationInterval = setInterval(animateConfetti, 50);
    const newConfettiInterval = setInterval(addNewConfetti, 500);
    
    return () => {
      clearInterval(animationInterval);
      clearInterval(newConfettiInterval);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}rem`,
            height: `${piece.size * 1.5}rem`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: 0.8,
            transition: 'transform 0.3s linear'
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;