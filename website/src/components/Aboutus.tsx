// src/components/Aboutus.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const albumsData = [
  {
    id: 1,
    title: "Album",
    mainImage: "/dist/photos/zywiec_main.jpg", // Upewnij się, że zdjęcia są w public/photos
    location: "Żywiec",
    date: "14.07.2024",
  },
];

const Aboutus: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8 md:px-16 lg:px-32">
      <h2 className="text-4xl font-bold mb-12 text-center">Szukasz zdjęć ze zlotu lub gadżetów dla Mercedesiarza?
      Dobrze trafiłeś! Rozglądnij się</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {albumsData.map((album) => (
          <Link to={`/album/${album.id}`} key={album.id}>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105">
              <img
                src={album.mainImage}
                alt={album.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-gray-800">
                <h3 className="text-xl font-bold">{album.title}</h3>
                <p className="text-gray-400">
                  {album.location} – {album.date}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Aboutus;
