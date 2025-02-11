import { useParams } from 'react-router-dom';

const albumPhotosData: { [key: number]: string[] } = {
  1: [
    "/dist/photos/zywiec1.jpg",
    "/dist/photos/zywiec2.jpg",
    "/dist/photos/zywiec3.jpg",
    "/dist/photos/zywiec4.jpg",
    "/dist/photos/zywiec5.jpg",
    "/dist/photos/zywiec6.jpg",
  ],
};

// Jedna deklaracja funkcji pomocniczej

export function AlbumDetail() {
  const { id } = useParams<{ id: string }>();
  const albumId = Number(id);
  const photos = albumPhotosData[albumId] || [];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8 md:px-16 lg:px-32 min-h-screen m-8">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={photo}
              alt={`Zdjęcie ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AlbumDetail;