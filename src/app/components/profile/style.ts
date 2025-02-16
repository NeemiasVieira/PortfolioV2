import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

export const ImageAndTitle = styled.div`
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-flow: column wrap;
  position: relative;
  width: 100%;
  max-width: 1000px;

  h2 {
    font-weight: 500;
    font-size: 2.2rem;
    white-space: nowrap;
    margin: 15px 0 0 0;
    position: relative;
    text-align: start;
  }

  .border-animation {
    z-index: 0;
    opacity: 1;
    aspect-ratio: 1;
    width: 180px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 25px 1.5px ${({ theme }) => theme.colors.primary};
    animation: fadeInOut 1.8s infinite;
  }

  @media screen and (max-width: 1023px) {
    margin-top: 30px;
    .border-animation {
      width: 150px;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const ProfileImage = styled(Image)`
  padding: 0 0px;
  border-radius: 100%;
  width: 180px;
  aspect-ratio: 1;
  flex-shrink: 0;
  height: 100%;
  object-position: 50% 50%;
  transition: all 300ms;
  z-index: 1;
  position: relative;

  @media screen and (max-width: 1023px) {
    width: 150px;
  }
`;

export const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 30px;

  @media screen and (max-width: 1023px) {
    margin: 0;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 10px;

  h3 {
    margin: 0;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 8px;
    white-space: nowrap;
  }

  @media screen and (max-width: 1023px) {
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const SocialLinksList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-left: 20px;
  list-style: none;
  margin: 0;
`;

export const SocialLinkItem = styled.li<{ $hoverColor: string }>`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.element};
    padding: 15px;
    border-radius: 100%;
    transition: transform 200ms ease;
    cursor: pointer;
  }

  svg {
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    transition: color 200ms ease;
  }

  &:hover {
    transform: scale(1.1);
    svg {
      color: ${({ $hoverColor }) => $hoverColor};
    }
  }
  @media screen and (max-width: 1023px) {
    svg {
      font-size: 1.5rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  gap: 15px;
  width: 70%;
  max-width: 1400px;
  margin-top: 80px;

  @media screen and (max-width: 1023px) {
    flex-flow: column wrap;
    margin-top: 50px;
    gap: 25px;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
  font-size: 1.3rem;
  text-align: start;

  b {
    font-weight: 700;
  }

  h3,
  h4,
  p {
    text-align: start;
  }

  h3 {
    font-weight: 700;
  }

  h4 {
    font-weight: 600;
  }

  @media screen and (max-width: 1023px) {
    font-size: 1rem;
  }
`;

export const CvContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 10px;

  h3 {
    margin: 0;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 8px;
  }
  a {
    background-color: ${({ theme }) => theme.colors.element};
    color: ${({ theme }) => theme.colors.text};
    padding: 15px;
    border: solid ${({ theme }) => theme.colors.border} 1px;
    border-radius: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    font-size: 1.3rem;
    display: flex;
    gap: 5px;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 1023px) {
    h3 {
      font-size: 1.2rem;
    }
    a {
      gap: 8px;
      font-size: 1.2rem;
    }
    svg {
      font-size: 1.2rem;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-flow: column wrap;
  gap: 20px;
`;

export const DecorativeIcon = styled(FontAwesomeIcon)<{
  $left?: string;
  $right?: string;
  $top?: string;
  $bottom?: string;
}>`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 5rem;
  position: absolute;
  left: ${(props) => props.$left};
  right: ${(props) => props.$right};
  top: ${(props) => props.$top};
  bottom: ${(props) => props.$bottom};
  z-index: -1;

  @media screen and (max-width: 1023px) {
    font-size: 2rem;
  }
`;
