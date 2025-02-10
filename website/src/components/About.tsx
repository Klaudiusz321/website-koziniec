import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8 md:px-16 lg:px-32">
      {/* Główna część: tekst i obrazek */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Tekst po lewej stronie */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">
            Gwiazdy z klasą – Mercedes to nasza pasja
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Kochamy Mercedesy, bo luksus i precyzja idą tu w parze. Jesteśmy najlepsi, bo wiemy, co to prawdziwa klasa.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <p className="text-gray-300">Luksus w każdym detalu.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🚗</span>
              </div>
              <p className="text-gray-300">Mercedesy, którym nie da się oprzeć.</p>
            </div>
          </div>
        </div>

        {/* Obrazek po prawej stronie */}
        <div className="md:w-1/2">
          <img
            src="photos/IMG20240511173134.jpg"
            alt="Szybkie auto"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Dodatkowy kontent w 4 kwadratach */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-2">Nasza Historia</h3>
          <p className="text-gray-300">
            Od lat tworzymy niezapomniane doświadczenia dla miłośników luksusu.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-2">Nasza Oferta</h3>
          <p className="text-gray-300">
            Szeroki wybór modeli, akcesoriów i usług serwisowych dopasowanych do Twoich potrzeb.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-2">Dlaczego My?</h3>
          <p className="text-gray-300">
            Jesteśmy liderem dzięki doświadczeniu, pasji i nieustannej dbałości o każdy detal.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-2">Nasze Wartości</h3>
          <p className="text-gray-300">
            Jakość, innowacja i tradycja – fundamenty, na których budujemy naszą markę.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
