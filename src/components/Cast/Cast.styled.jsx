import styled from 'styled-components';

export const CastContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;

export const ActorList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const ActorItem = styled.li`
  text-align: center;
`;

export const ActorImage = styled.img`
  width: 200px; /* Задайте фіксовану ширину, яка вам підходить */
  height: 300px; /* Задайте фіксовану висоту, яка вам підходить */
  object-fit: cover; /* Заповнює зображення в контейнері */
  border-radius: 10%;
`;

export const ActorName = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;
