import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../components/Api';

import {
  Container,
  MovieList,
  MovieItem,
  MoviePoster,
  MovieTitle,
} from './Home.styled';

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // Отримайте список популярних фільмів з API і збережіть їх в стані
    const fetchTrendingMovies = async () => {
      try {
        const response = await api.get('/trending/movie/day');
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Помилка при отриманні популярних фільмів:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <Container>
      <h1>Популярні фільми</h1>
      <MovieList>
        {trendingMovies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <MovieItem>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieItem>
          </Link>
        ))}
      </MovieList>
    </Container>
  );
}
