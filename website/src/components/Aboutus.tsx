

export function AboutUs() {
  return (
    <div className="bg-black text-white">
      {/* Sekcja 1: O nas */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4 animate-fadeIn">
          O nas
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeIn delay-100">
          Jesteśmy pasjonatami łączącymi tradycję z innowacją. Nasza misja to tworzenie niezapomnianych doświadczeń oraz produktów najwyższej jakości.
        </p>
      </section>

      {/* Sekcja 2: Album zdjęć */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-center animate-fadeIn">
          Album
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "public/photos/IMG20241030222404_BURST000_COVER.jpg",
            "public/photos/IMG20240908044529.jpg",
            "public/photos/IMG20240511173440.jpg",
            "public/photos/received_268114745274885.jpeg",
            "public/photos/received_3138579286419556.jpeg",
            "public/photos/IMG_2017.JPG",
          ].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Album ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Sekcja 3: Call to Action */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 animate-fadeIn">
          Dołącz do nas
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fadeIn delay-100">
          Masz pytania? Chcesz współtworzyć przyszłość? Skontaktuj się z nami już dziś!
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 animate-fadeIn">
          Skontaktuj się
        </button>
      </section>

      {/* Sekcja 4: Nasz zespół */}
      <section className="py-16 px-4 bg-gray-900">
        <h2 className="text-4xl font-bold mb-8 text-center animate-fadeIn">
          Nasz zespół
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Jan Kowalski", role: "CEO", img: "https://source.unsplash.com/random/300x300?person" },
            { name: "Anna Nowak", role: "CTO", img: "https://source.unsplash.com/random/300x300?woman" },
            { name: "Piotr Wiśniewski", role: "Designer", img: "https://source.unsplash.com/random/300x300?designer" },
            { name: "Maria Zielińska", role: "Marketing", img: "https://source.unsplash.com/random/300x300?marketing" }
          ].map((member, index) => (
            <div key={index} className="text-center animate-fadeIn delay-200">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <h3 className="mt-4 text-2xl font-bold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
