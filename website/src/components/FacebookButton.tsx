import React from 'react';

interface FacebookButtonProps {
  url: string;   // Adres URL do profilu Instagrama
  text?: string; // Opcjonalny tekst przycisku (domyślnie "Instagram")
}

const  FacebookButton: React.FC<FacebookButtonProps> = ({ url, text = 'Instagram' }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
    >
      {/* Odwołanie do pliku SVG z folderu public */}
      {text}
    </a>
  );
};

export default FacebookButton;
