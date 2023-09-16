import { SearchBarContainer } from './SearchBar.styled';

export const SearchBar = ({ search, onChange }) => {
  return (
    <SearchBarContainer
      type="text"
      placeholder="Пошук фільмів"
      value={search}
      onChange={evt => onChange(evt.target.value, 'search')}
    />
  );
};
