
import { Link } from 'react-router-dom';

type AlbumCardProps = {
  id: number;
  mainImage: string;
  location: string;
  date: string;
};

export function AlbumCard({ id, mainImage, location, date }: AlbumCardProps) {
  return (
    <Link to={`/album/${id}`}>
      <div className="rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105">
        <img
          src={mainImage}
          alt={`${location} - ${date}`}
          className="w-full h-64 object-cover"
        />
        <div className="p-4 bg-gray-800">
          <h3 className="text-xl font-bold text-white">{location}</h3>
          <p className="text-gray-400">{date}</p>
        </div>
      </div>
    </Link>
  );
}
