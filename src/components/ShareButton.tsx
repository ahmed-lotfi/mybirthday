import React, { useState } from 'react';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  name: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ name }) => {
  const [copied, setCopied] = useState(false);
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${name}'s Birthday!`,
        text: `Send a birthday wish to ${name}!`,
        url: window.location.href,
      }).catch(err => {
        console.error('Error sharing:', err);
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  return (
    <button
      onClick={handleShare}
      className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg z-20 transition transform hover:scale-110"
      aria-label="Share this page"
    >
      {copied ? (
        <div className="text-xs whitespace-nowrap absolute -top-8 right-0 bg-gray-800 text-white px-2 py-1 rounded">
          Link copied!
        </div>
      ) : null}
      <Share2 size={20} />
    </button>
  );
};

export default ShareButton;