import React, { useState } from 'react';

import {
  SearchBarContainer,
  SearchInput,
  SearchButton,
} from './SearchBar.styled';

export function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Виконайте пошук і передайте результати через зазначену функцію зовнішнього компонента
    onSearch(searchQuery);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Пошук фільмів"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <SearchButton onClick={handleSearch}>Пошук</SearchButton>
    </SearchBarContainer>
  );
}
