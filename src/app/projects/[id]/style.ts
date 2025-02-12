import styled from 'styled-components';

export const ProjectDetailsWrapper = styled.div`
  margin-top: 120px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  width: 100%;
  font-size: 1.1rem;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    min-height: 90vh;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  gap: 50px;
  max-width: 1400px;

  @media screen and (max-width: 1023px) {
    flex-flow: column wrap;
    align-items: center;
    font-size: 0.9rem;
  }
`;

export const ProjectInformation = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  gap: 10px;
  width: 55%;
  max-width: 450px;

  h1 {
    text-align: start;
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    max-width: none;
    width: 85%;

    h1 {
      font-size: 1.4rem;
    }
    font-size: 0.85rem;
  }
`;

export const ProjectImage = styled.img`
  width: 45%;
  height: auto;
  border-radius: 24px;
  object-position: top;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-flow: column wrap;
  width: 100%;
  margin-top: 20px;
`;

export const ProjectLink = styled.a`
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
  gap: 7px;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const LGPDWarn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  font-size: 0.9rem;
  gap: 10px;
  font-weight: 300;
  margin-top: 15px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #222;

  .titleAndIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;

    svg {
      font-size: 2rem;
    }

    strong {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    .titleAndIcon {
      strong {
        font-size: 0.8rem;
      }
      svg {
        font-size: 1.5rem;
      }
    }
  }
`;
