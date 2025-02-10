import React from 'react';

interface InstagramButtonProps {
  url: string;   // Adres URL do profilu Instagrama
  text?: string; // Opcjonalny tekst przycisku (domyślnie "Instagram")
}

const InstagramButton: React.FC<InstagramButtonProps> = ({ url, text = 'Instagram' }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
    >
      {/* Odwołanie do pliku SVG z folderu public */}
      {text}
    </a>
  );
};

export default InstagramButton;
