import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;

export const MovieTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const MoviePoster = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`;

export const MovieOverview = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;

export const CreditsLink = styled(Link)`
  text-decoration: none;
  color: #333;
  margin-top: 20px;
  display: block;
  font-size: 18px;

  &:hover {
    color: #ff5722;
  }
`;

export const ReviewsLink = styled(Link)`
  text-decoration: none;
  color: #333;
  margin-top: 10px;
  display: block;
  font-size: 18px;

  &:hover {
    color: #ff5722;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;
