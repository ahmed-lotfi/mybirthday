import React from 'react';
import { CheckCircle, Heart } from 'lucide-react';

interface SuccessMessageProps {
  name: string;
  onSendAnother: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ name, onSendAnother }) => {
  return (
    <div className="w-full max-w-md mx-auto text-center bg-white rounded-xl shadow-lg p-8 transform transition-all ease-in-out animate-fadeIn">
      <div className="mb-4 flex justify-center">
        <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </span>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Thank You!
      </h2>
      
      <p className="text-gray-600 mb-6">
        Your birthday message to {name} has been sent successfully! It will appear in their WhatsApp shortly.
      </p>
      
      <div className="flex justify-center my-4">
        <Heart className="text-pink-500 h-8 w-8 animate-pulse" />
      </div>
      
      <button
        onClick={onSendAnother}
        className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Send Another Message
      </button>
      
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: `${name}'s Birthday!`,
                text: `Send a birthday wish to ${name}!`,
                url: window.location.href,
              });
            } else {
              navigator.clipboard.writeText(window.location.href);
              alert('Link copied to clipboard!');
            }
          }}
          className="text-sm text-indigo-600 hover:text-indigo-800 transition"
        >
          Share this page
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;