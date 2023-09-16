import React, { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchMovies } from '../../components/Api';

import { Container } from './Movies.styled';

const getIntialFilters = () => {
  const savedFilters = localStorage.getItem('quiz-filters');
  if (savedFilters !== null) {
    return JSON.parse(savedFilters);
  }
  return {
    search: '',
  };
};

export function Movies() {
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState(getIntialFilters);

  const changeFilters = (value, key) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (!filters.search) {
      setSearchResults([]);
      return;
    }

    const fetchSearchResults = async () => {
      try {
        const results = await fetchMovies(filters.search);
        setSearchResults(results);
      } catch (error) {
        console.error('Помилка при отриманні результатів пошуку:', error);
      }
    };

    fetchSearchResults();
  }, [filters.search]);

  return (
    <Container>
      <h1>Пошук фільмів</h1>
      <SearchBar search={filters.search} onChange={changeFilters} />
      <MovieList movies={searchResults} />
    </Container>
  );
}
