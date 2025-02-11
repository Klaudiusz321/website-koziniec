import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8 md:px-16 lg:px-32">
      {/* Główna część: tekst i obrazek */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Tekst po lewej stronie */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">
            Poznamy się lepiej?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
          Naszą misją jest łączyć ludzi kochających Mercedesy z całej Polski. Możecie nas spotkać na zlotach i eventach 
          motoryzacyjnych w całym kraju –
           wszędzie tam, gdzie dźwięk silnika i miłość do gwiazdy jednoczy fanów czterech kółek. 

          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">📷</span>
              </div>
              <p className="text-gray-300">Zerknij w naszą galerie.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🛍️</span>
              </div>
              <p className="text-gray-300">Odwiedź nasz sklep.</p>
            </div>
          </div>
        </div>

        {/* Obrazek po prawej stronie */}
        <div className="md:w-1/2">
          <img
            src="public/photos/Messenger_creation_FE6FABF1-7A44-43CD-BE8A-C89EE1057815.jpeg"
            alt="Szybkie auto"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

     
    </section>
  );
};

export default About;
