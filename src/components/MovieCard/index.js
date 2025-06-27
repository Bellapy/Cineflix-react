import React from 'react';
import { Link } from 'react-router-dom';
import { movieService } from '../../services/movieService';

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? movieService.getImageUrl(movie.poster_path)
    : 'https://via.placeholder.com/500x750.png?text=No+Image';

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <Link to={`/movie/${movie.id}`}>
        <img src={imageUrl} alt={movie.title} className="w-full h-auto" />
        <div className="p-4">
          <h3 className="text-white text-lg font-semibold text-center h-16 flex items-center justify-center">
            {movie.title}
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;