import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  margin: 50px 0;
  width: 100%;
  max-width: 1500px;
  overflow: hidden;

  h2 {
    text-align: center;
  }
`;

export const ProjectList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 450px));
  width: 100%;
  justify-items: center;
  align-content: center;
  justify-content: center;
  align-items: stretch;
  gap: 25px;
  padding: 20px;

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(auto-fill, minmax(90%, 1fr));
    padding: 0 30px;
    margin-top: 20px;
    gap: 25px;
  }
`;

export const ProjectItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.shadows.default};
  border-radius: 10px;
  width: 450px;
  gap: 25px;
  font-size: 0.9rem;
  height: 100%;

  @media screen and (max-width: 550px) {
    flex-flow: column wrap;
    width: 100%;
    gap: 5px;
    box-shadow: ${({ theme }) => theme.shadows.light};
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
  color: ${({ $isOpenSource, theme }) => ($isOpenSource ? theme.colors.success : theme.colors.error)};
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
  width: 100%;
`;

export const DetailsButton = styled(Link)`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.element};
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
  border: solid ${({ theme }) => theme.colors.border} 1px;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    margin-top: 10px;
  }
`;
