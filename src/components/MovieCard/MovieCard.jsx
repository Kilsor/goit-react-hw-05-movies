import {
  MovieCardWrapper,
  MoviePoster,
  MovieLink,
  MovieTitle,
} from './MovieCard.styled';

export function MovieCard({ movie }) {
  return (
    <MovieLink to={`/movies/${movie.id}`}>
      <MovieCardWrapper>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <MovieTitle>{movie.title}</MovieTitle>
      </MovieCardWrapper>
    </MovieLink>
  );
}
