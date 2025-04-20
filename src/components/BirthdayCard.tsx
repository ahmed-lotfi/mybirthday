import React from 'react';
import CountdownTimer from './CountdownTimer';
import { Cake } from 'lucide-react';

interface BirthdayCardProps {
  name: string;
  photoUrl: string;
  birthdayDate: Date;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({ name, photoUrl, birthdayDate }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden transform transition hover:scale-[1.01] duration-300">
      <div className="relative">
        {/* Decorative header with gradient */}
        <div className="h-24 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
        
        {/* Profile photo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-24">
          <div className="rounded-full h-28 w-28 border-4 border-white shadow-lg overflow-hidden">
            <img 
              src={photoUrl} 
              alt={name} 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Card content */}
      <div className="pt-16 px-6 pb-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-1">
          <Cake className="text-pink-500" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{name}'s Birthday!</h2>
        </div>
        
        <p className="text-gray-600 mb-4">is coming up on {birthdayDate.toLocaleDateString('en-US', { 
          month: 'long', 
          day: 'numeric'
        })}</p>
        
        <div className="mb-6">
          <CountdownTimer targetDate={birthdayDate} />
        </div>
        
        <div className="py-3 px-4 bg-pink-50 rounded-lg text-pink-800 text-sm mb-6">
          Send a birthday message that will be delivered directly to {name} via WhatsApp!
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;