import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Стилі для обгортки картки фільму
export const MovieCardWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

// Стилі для зображення постера фільму
export const MoviePoster = styled.img`
  max-width: 100%;
  height: auto;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;

// Стилі для заголовка фільму
export const MovieTitle = styled.h2`
  font-size: 1.2rem;
  margin-top: 10px;
  color: #333;
`;
