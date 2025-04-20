import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4 text-center p-4">
      <div className="countdown-item">
        <div className="bg-white bg-opacity-90 rounded-lg p-3 shadow-md w-16 md:w-20">
          <div className="text-2xl md:text-3xl font-bold text-pink-600">{timeLeft.days}</div>
          <div className="text-xs md:text-sm text-gray-600">Days</div>
        </div>
      </div>
      <div className="countdown-item">
        <div className="bg-white bg-opacity-90 rounded-lg p-3 shadow-md w-16 md:w-20">
          <div className="text-2xl md:text-3xl font-bold text-pink-600">{timeLeft.hours}</div>
          <div className="text-xs md:text-sm text-gray-600">Hours</div>
        </div>
      </div>
      <div className="countdown-item">
        <div className="bg-white bg-opacity-90 rounded-lg p-3 shadow-md w-16 md:w-20">
          <div className="text-2xl md:text-3xl font-bold text-pink-600">{timeLeft.minutes}</div>
          <div className="text-xs md:text-sm text-gray-600">Minutes</div>
        </div>
      </div>
      <div className="countdown-item">
        <div className="bg-white bg-opacity-90 rounded-lg p-3 shadow-md w-16 md:w-20">
          <div className="text-2xl md:text-3xl font-bold text-pink-600">{timeLeft.seconds}</div>
          <div className="text-xs md:text-sm text-gray-600">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;