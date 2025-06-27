const API_KEY = process.env.REACT_APP_KEY;
const API_BASE = "https://api.themoviedb.org/3";
const IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/w500";

const fetchFromApi = async (endpoint) => {
    const url = `${API_BASE}${endpoint}?api_key=${API_KEY}&language=pt-BR`;
    const response = await fetch(url);
    return response.json();
};

export const movieService = {
    getPopularMovies: async () => {
        const data = await fetchFromApi("/movie/popular");
        return data.results;
    },
    getMovieById: async (id) => {
        return fetchFromApi(`/movie/${id}`);
    },
    getGenres: async () => {
        const data = await fetchFromApi("/genre/movie/list");
        return data.genres;
    },
    getMoviesByGenre: async (genreId) => {
        const data = await fetchFromApi(`/discover/movie`, `&with_genres=${genreId}`);
        const url = `${API_BASE}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${genreId}`;
        const response = await fetch(url);
        const jsonData = await response.json();
        return jsonData.results;
    },
    getImageUrl: (path) => {
        return `${IMAGE_BASE_PATH}${path}`;
    },
};