import axios from 'axios';

const API_KEY = '81d5804a86027a8c45a46a14c3dcd7e1';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export const fetchMovies = async query => {
  try {
    const response = await api.get('/search/movie', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Помилка при отриманні результатів пошуку фільмів:', error);
    throw error;
  }
};

export const fetchMovieById = async movieId => {
  try {
    const response = await api.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні інформації про фільм:', error);
    throw error;
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await api.get('/trending/movie/day');
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні списку популярних фільмів:', error);
    throw error;
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await api.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    console.error('Помилка при отриманні оглядів:', error);
    throw error;
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await api.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.error(
      'Помилка при отриманні інформації про акторський склад:',
      error
    );
    throw error;
  }
};
