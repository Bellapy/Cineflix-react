import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { movieService } from '../../services/movieService';
import Header from '../../components/Header'; // <-- ADICIONE O IMPORT DE VOLTA

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovie = async () => {
      setLoading(true);
      const movieData = await movieService.getMovieById(id);
      setMovie(movieData);
      setLoading(false);
    };
    
    loadMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Header />
        <p className="text-center text-xl mt-10">Carregando detalhes...</p>
      </div>
    );
  }

  if (!movie || movie.success === false) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Header />
        <p className="text-center text-xl mt-10">Filme não encontrado ou erro na API.</p>
      </div>
    );
  }

  const imageUrl = movie.poster_path
    ? movieService.getImageUrl(movie.poster_path)
    : 'https://via.placeholder.com/500x750.png?text=No+Image';

  return (
    <div className="container mx-auto px-4 py-8">
      <Header /> {/* <-- ADICIONE O HEADER AQUI */}
      <div className="mt-8 flex flex-col md:flex-row gap-8">
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-400 mb-4">
            Lançamento: {new Date(movie.release_date).toLocaleDateString('pt-BR')}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genres && movie.genres.map(genre => (
                <span key={genre.id} className="bg-gray-700 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                    {genre.name}
                </span>
            ))}
          </div>
          <h2 className="text-2xl font-semibold mb-2">Sinopse</h2>
          <p className="text-gray-300 leading-relaxed">
            {movie.overview || "Sinopse não disponível."}
          </p>
          <Link to="/">
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors">
              Voltar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;