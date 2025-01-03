import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Funkcja do obsługi przewijania
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Dodanie event listenera do scrollowania
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 transition-colors duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-white drop-shadow-lg">
        <a href="/">Gwiazdy z Klasą</a>
      </div>

      {/* Linki */}
      <ul className="hidden md:flex gap-6 text-white drop-shadow-lg">
        <li><a href="#home" className="hover:text-red-500 transition-colors duration-200">Home</a></li>
        <li><a href="#about" className="hover:text-red-500 transition-colors duration-200">About</a></li>
        <li><a href="#gallery" className="hover:text-red-500 transition-colors duration-200">Gallery</a></li>
        <li><a href="#contact" className="hover:text-red-500 transition-colors duration-200">Contact</a></li>
      </ul>

      {/* Przycisk */}
      <a
        href="#book"
        className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors duration-300"
      >
        Book an Appointment
      </a>
    </nav>
  );
};

export default Navbar;
