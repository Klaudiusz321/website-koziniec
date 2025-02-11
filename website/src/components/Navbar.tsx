import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InstagramButton from './InstagramButton';
import FacebookButton from './FacebookButton';
import { useShoppingCart } from '../context/ShoppingCartContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { openCart, cartQuantity } = useShoppingCart();

  // Dla mobilnego menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 100);
    setIsVisible(currentScrollY <= lastScrollY);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 py-4 transition-all duration-300 z-50 ${
        isScrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-white drop-shadow-lg">
        <Link to="/">GZK</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white drop-shadow-lg">
        <li>
          <Link to="/Store" className="hover:text-red-500 transition-colors duration-200">
            Sklep
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-red-500 transition-colors duration-200">
            O nas
          </Link>
        </li>
      </ul>

      {/* Desktop Social & Cart Panel */}
      <div className="hidden md:flex items-center gap-4">
        <InstagramButton url="https://www.instagram.com/gwiazdy_z_klasa/" text="Instagram" />
        <FacebookButton url="https://www.facebook.com/profile.php?id=61559163152972" text="Facebook" />

        <button
          onClick={openCart}
          className="relative w-12 h-12 rounded-full border border-white flex items-center justify-center hover:shadow-lg transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-6 h-6">
            <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/>
          </svg>
          {cartQuantity > 0 && (
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              {cartQuantity}
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black z-40 p-4 flex flex-col gap-4 md:hidden">
          <Link onClick={toggleMenu} to="/Store" className="hover:text-red-500 transition-colors duration-200">
            Sklep
          </Link>
          <Link onClick={toggleMenu} to="/about" className="hover:text-red-500 transition-colors duration-200">
            O nas
          </Link>
          <div className="flex gap-4">
            <InstagramButton url="https://www.instagram.com/gwiazdy_z_klasa/" text="Instagram" />
            <FacebookButton url="https://www.facebook.com/profile.php?id=61559163152972" text="Facebook" />
          </div>
          <button
            onClick={() => {
              toggleMenu();
              openCart();
            }}
            className="relative w-12 h-12 rounded-full border border-white flex items-center justify-center hover:shadow-lg transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            {cartQuantity > 0 && (
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {cartQuantity}
              </div>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
