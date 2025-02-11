import React from 'react';

const StoreInvitationSection: React.FC = () => {
  return (
    <section className="relative w-full h-100px bg-black p-12">
      {/* Warstwa z wzorem inspirowanym Mercedesem */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/mercedes-pattern.png')" }}
      ></div>

      {/* Ciemna nakładka dla lepszej czytelności tekstu */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Treść sekcji */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Odkryj naszą wyjątkową ofertę produktów dla fanów Mercedessa
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8">
        Luksus w cenie breloczka? Znajdziesz go w naszym sklepie
        </p>
        <a
          href="/Store" // Dopasuj ścieżkę do sklepu
          className="bg-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transition duration-300"
        >
          Odwiedź Sklep
        </a>
      </div>
    </section>
  );
};

export default StoreInvitationSection;
