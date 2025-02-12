'use client';
import styled from 'styled-components';

export const TecnologiesWrapper = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
  border-radius: 25px;
  padding: 15px;
  margin-top: 50px;

  h2 {
    text-align: center;
  }

  @media screen and (max-width: 1023px) {
    width: 80%;
    display: inline-block;
    margin-top: 30px;

    h2 {
      margin-bottom: 20px;
      font-size: 1.2rem;
    }
  }
`;

export const TecnologiesList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  gap: 20px;

  div {
    display: flex;
    gap: 20px;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 12px;

    div {
      gap: 5px;
    }
  }
`;

export const TecnologyItem = styled.div<{ $hoverColor: string }>`
  display: flex;
  align-items: center;
  transition: color 250ms;
  flex-flow: column wrap;
  color: rgb(122, 135, 141);

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor};

    span {
      color: ${({ $hoverColor }) => $hoverColor};
    }
  }

  span {
    margin-top: 5px;
    color: #fff;
    transition: color 250ms;
  }

  @media screen and (max-width: 1023px) {
    span {
      margin: 0;
      color: #fff;
    }

    color: ${({ $hoverColor }) => $hoverColor};
  }
`;
