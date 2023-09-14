import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../Api';

import {
  RevContainer,
  ReviewItem,
  ReviewAuthor,
  ReviewContent,
} from './Reviews.styled';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Отримайте огляди для конкретного фільму за його ID з API і збережіть їх в стані
    const fetchMovieReviews = async () => {
      try {
        const response = await api.get(`/movie/${movieId}/reviews`);
        setReviews(response.data.results);
      } catch (error) {
        console.error('Помилка при отриманні оглядів:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <RevContainer>
      <h2>Огляди</h2>
      {reviews.length === 0 ? (
        <p>Огляди відсутні.</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewAuthor>{review.author}</ReviewAuthor>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          ))}
        </ul>
      )}
    </RevContainer>
  );
}
