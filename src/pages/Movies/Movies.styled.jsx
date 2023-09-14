import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const MovieItem = styled.li`
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MoviePoster = styled.img`
  max-width: 100%;
  height: auto;
`;

export const MovieTitle = styled.h2`
  font-size: 16px;
  margin: 10px 0;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;
