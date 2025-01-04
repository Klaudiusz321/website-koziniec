import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/film.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative text-center text-white flex flex-col items-center justify-center h-full px-4 z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Gwiazdy z Klasą</h1>
        <p className="text-lg md:text-xl mb-8">
          Unlock the hidden potential of your car with premium tuning solutions.
        </p>
        <a
          href="#book"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          Book an Appointment
        </a>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
    </section>
  );
};

export default HeroSection;
