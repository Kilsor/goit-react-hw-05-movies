import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';

import { MovieListContainer } from './MovieList.styled';

export function MovieList({ movies }) {
  return (
    <MovieListContainer>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MovieListContainer>
  );
}
