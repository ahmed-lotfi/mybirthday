import React, { useEffect, useState } from 'react';

interface Balloon {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

const colors = [
  'bg-red-500',
  'bg-blue-500',
  'bg-yellow-400',
  'bg-green-500',
  'bg-purple-500',
  'bg-pink-500'
];

const FloatingBalloons: React.FC = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const createBalloons = () => {
      const newBalloons: Balloon[] = [];
      
      for (let i = 0; i < 10; i++) {
        newBalloons.push({
          id: i,
          x: Math.random() * 95,
          y: 105 + Math.random() * 20,
          size: Math.random() * 20 + 30,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 10,
          duration: Math.random() * 10 + 15
        });
      }
      
      setBalloons(newBalloons);
    };
    
    createBalloons();
    
    // Recreate balloons periodically
    const interval = setInterval(() => {
      createBalloons();
    }, 20000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map(balloon => (
        <div
          key={balloon.id}
          className={`absolute rounded-full ${balloon.color} opacity-60`}
          style={{
            left: `${balloon.x}%`,
            bottom: `-${balloon.y}%`,
            width: `${balloon.size}px`,
            height: `${balloon.size * 1.2}px`,
            animation: `float ${balloon.duration}s ease-in-out ${balloon.delay}s infinite`,
            transform: 'translateY(100vh)'
          }}
        >
          <div 
            className="absolute bottom-0 left-1/2 w-1 h-20 bg-gray-300" 
            style={{ transform: 'translateX(-50%)' }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingBalloons;