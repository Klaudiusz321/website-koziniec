

export function AboutUs() {
  return (
    <div className="bg-black text-white">
      {/* Sekcja 1: O nas */}
      

      {/* Sekcja 2: Album zdjęć */}
      <section className="py-16 px-4 m-8">
        
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

      

     
    </div>
  );
}

export default AboutUs;
