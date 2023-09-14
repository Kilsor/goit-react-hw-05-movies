import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../components/Api';

import {
  Container,
  SearchBar,
  MovieList,
  MovieItem,
  MoviePoster,
  MovieTitle,
} from './Movies.styled';

export function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (!searchQuery) {
      setSearchResults([]);
      return;
    }

    // Отримайте результати пошуку за ключовим словом з API і збережіть їх в стані
    const fetchSearchResults = async () => {
      try {
        const response = await api.get('/search/search-movies', {
          params: { query: searchQuery },
        });
        setSearchResults(response.data.results);
      } catch (error) {
        console.error('Помилка при отриманні результатів пошуку:', error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <Container>
      <h1>Пошук фільмів</h1>
      <SearchBar
        type="text"
        placeholder="Пошук фільмів"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <MovieList>
        {searchResults.map(movie => (
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
