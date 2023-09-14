import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../Api';

import {
  CastContainer,
  ActorList,
  ActorItem,
  ActorImage,
  ActorName,
} from './Cast.styled';

export function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // Отримайте інформацію про акторський склад для конкретного фільму за його ID з API і збережіть її в стані
    const fetchMovieCast = async () => {
      try {
        const response = await api.get(`/movie/${movieId}/credits`);
        setCast(response.data.cast);
      } catch (error) {
        console.error(
          'Помилка при отриманні інформації про акторський склад:',
          error
        );
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <CastContainer>
      <h2>Акторський склад</h2>
      <ActorList>
        {cast.map(actor => (
          <ActorItem key={actor.id}>
            <ActorImage
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : `https://qph.cf2.quoracdn.net/main-qimg-6d72b77c81c9841bd98fc806d702e859-lq`
              }
              alt={actor.name}
            />
            <ActorName>{actor.name}</ActorName>
          </ActorItem>
        ))}
      </ActorList>
    </CastContainer>
  );
}
