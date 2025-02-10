'use client';
import styled from 'styled-components';

export const CompetenciesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  h2 {
    text-align: center;
  }
`;

export const CompetenciesList = styled.ul`
  list-style: none;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  max-width: 1200px;
  width: 90%;
  margin: 0;
`;

export const CompetencieItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
  margin-top: 5px;

  svg {
    font-size: 2rem;
  }

  .textContainer {
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    gap: 15px;
  }
`;
