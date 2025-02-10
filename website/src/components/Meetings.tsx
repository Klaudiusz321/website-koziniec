import React from 'react';

const meetingsData = [
  {
    id: 1,
    title: 'Mercedes Stars Meeting 2025',
    date: '15 marca 2025',
    location: 'Warszawa, Polska',
    description:
      'Dołącz do nas na weekend pełen pasji do Mercedesa! Spotkaj się z innymi fanami, zobacz ekskluzywne auta i podziel się miłością do marki.',
  },
  {
    id: 2,
    title: 'Mercedes Drive Polska',
    date: '22 kwietnia 2025',
    location: 'Kraków, Polska',
    description:
      'Przeżyj niezapomnianą jazdę po polskich ulicach z innymi entuzjastami Mercedesa.',
  },
  {
    id: 3,
    title: 'Klasyczny Mercedes Gathering',
    date: '10 czerwca 2025',
    location: 'Poznań, Polska',
    description:
      'Świętujemy klasyczne Mercedesy w sercu Polski. Nie przegap tego wyjątkowego wydarzenia!',
  },
];

const Meetings: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8 md:px-16 lg:px-32">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Nadchodzące spotkania Mercedes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {meetingsData.map((meeting) => (
          <div key={meeting.id} className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">{meeting.title}</h3>
            <p className="text-gray-400 mb-2">
              📅 <strong>Data:</strong> {meeting.date}
            </p>
            <p className="text-gray-400 mb-2">
              📍 <strong>Miejsce:</strong> {meeting.location}
            </p>
            <p className="text-gray-300 mb-4">{meeting.description}</p>
            <a
              href="#"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full inline-block"
            >
              Dołącz do spotkania
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Meetings;
