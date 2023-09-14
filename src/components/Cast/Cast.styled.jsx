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
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

export const ActorItem = styled.li`
  text-align: center;
`;

export const ActorImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
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
