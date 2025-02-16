import styled from 'styled-components';

export const ProjectDetailsWrapper = styled.div`
  margin-top: 90px;
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
  width: 100%;
  padding: 0 50px;

  @media screen and (max-width: 1023px) {
    flex-flow: column wrap;
    align-items: center;
    font-size: 0.9rem;
    padding: 0;
    width: 90%;
  }
`;

export const ProjectInformation = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  gap: 10px;
  width: 50%;

  h1 {
    text-align: start;
    width: 100%;
  }

  @media screen and (max-width: 1023px) {
    max-width: none;
    width: 100%;

    h1 {
      font-size: 1.4rem;
    }
    font-size: 0.85rem;
  }
`;

export const ProjectImage = styled.img`
  width: auto;
  max-height: 400px;
  max-width: 50%;
  border-radius: 5px;
  object-fit: contain;
  object-position: top;

  @media screen and (max-width: 1023px) {
    max-width: 100%;
    max-height: 500px;
  }
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
  background-color: ${({ theme }) => theme.colors.element};
  border-radius: 10px;
  border: solid ${({ theme }) => theme.colors.border} 1px;
  box-shadow: ${({ theme }) => theme.shadows.light};
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 4px;
  width: 100%;
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
  background-color: ${({ theme }) => theme.colors.element};

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

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  gap: 10px;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 10px;
  align-self: flex-start;
  margin-left: 5%;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.element};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  -webkit-box-shadow: ${({ theme }) => theme.shadows.light};
  -moz-box-shadow: ${({ theme }) => theme.shadows.light};
  box-shadow: ${({ theme }) => theme.shadows.light};
  border: solid ${({ theme }) => theme.colors.border} 1px;
  transition: transform ease-in-out 200ms;

  &:hover {
    transform: scale(1.1);
  }
`;
