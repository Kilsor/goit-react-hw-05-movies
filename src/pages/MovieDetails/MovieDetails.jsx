import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../components/Api';

import {
  Container,
  MovieTitle,
  MoviePoster,
  MovieOverview,
  CreditsLink,
  ReviewsLink,
} from './MovieDetails.styled';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Отримайте повну інформацію про фільм за його ID з API і збережіть її в стані
    const fetchMovieDetails = async () => {
      try {
        const response = await api.get(`/movies/get-movie-details/${movieId}`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Помилка при отриманні інформації про фільм:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <MovieTitle>{movieDetails.title}</MovieTitle>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <MovieOverview>{movieDetails.overview}</MovieOverview>
      <CreditsLink to={`/movies/${movieId}/cast`}>Акторський склад</CreditsLink>
      <ReviewsLink to={`/movies/${movieId}/reviews`}>Огляди</ReviewsLink>
    </Container>
  );
}
