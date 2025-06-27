import React, { useState, useEffect } from 'react';
import { movieService } from '../../services/movieService';
import MovieCard from '../../components/MovieCard';
import CategoryFilter from '../../components/CategoryFilter';
import Header from '../../components/Header';

function Home() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGenres = async () => {
      const fetchedGenres = await movieService.getGenres();
      setGenres(fetchedGenres);
    };
    loadGenres();
  }, []);
  
  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      let fetchedMovies;
      if (selectedGenre) {
        fetchedMovies = await movieService.getMoviesByGenre(selectedGenre);
      } else {
        fetchedMovies = await movieService.getPopularMovies();
      }
      setMovies(fetchedMovies);
      setLoading(false);
    };

    loadMovies();
  }, [selectedGenre]);

  return (
    // Agora o container principal está aqui dentro
    <div className="container mx-auto px-4 py-8">
      <Header /> {/* <-- ADICIONE O HEADER AQUI */}
      
      <CategoryFilter
        genres={genres}
        selectedGenre={selectedGenre}
        onSelectGenre={setSelectedGenre}
      />
      {loading ? (
        <p className="text-center text-xl mt-10">Carregando filmes...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;