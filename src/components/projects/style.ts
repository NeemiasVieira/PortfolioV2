import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  margin: 50px 0;
  width: 100%;
  max-width: 1400px;
  overflow: hidden;

  h2 {
    margin-bottom: 25px;
    text-align: center;
  }
`;

export const ProjectList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  width: 100%;
  justify-items: center;
  align-items: stretch;

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(auto-fill, minmax(90%, 1fr));
    padding: 0 30px;
    gap: 15px;
  }
`;

export const ProjectItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  padding: 10px;
  -webkit-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  width: 450px;
  gap: 25px;
  font-size: 0.9rem;
  margin-top: 10px;
  height: 100%;

  @media screen and (max-width: 550px) {
    flex-flow: column wrap;
    width: 100%;
  }
`;

export const ProjectImage = styled(Image)`
  aspect-ratio: 1;
  width: 150px;
  border-radius: 15px;
  align-self: center;
  object-fit: contain;
  object-position: center;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const ProjectLicense = styled.span<{ $isOpenSource?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0;
  gap: 10px;
  align-self: flex-start;
  border-radius: 5px;
  color: ${({ $isOpenSource }) => ($isOpenSource ? '#00C853' : '#ff3300')};
  font-weight: 700;
`;

export const ProjectDetailsContainer = styled.div`
  h3 {
    margin-top: 10px;
  }
  display: flex;
  gap: 10px;
  flex-flow: column wrap;

  @media screen and (max-width: 550px) {
    padding: 0 10px;
    h3 {
      text-align: center;
    }
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  gap: 5px;
`;

export const DetailsButton = styled(Link)`
  padding: 10px;
  background-color: #222;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 4px;
  width: 80%;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    margin-top: 10px;
  }
`;
