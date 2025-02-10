'use client';
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
  width: 50%;
  max-width: 1000px;

  h2 {
    font-weight: 500;
    font-size: 2.2rem;
    white-space: nowrap;
    margin: 15px 0 0 0;
    /* color: var(--primary-color); */
    position: relative;
    text-align: start;
  }

  .border-animation {
    z-index: 0;
    max-width: 180px;
    opacity: 1;
    width: 180px;
    height: 180px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 20px 2px var(--primary-color);
    animation: fadeInOut 2s infinite;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
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
`;

export const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 30px;
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
    background-color: #000;
    padding: 15px;
    border-radius: 100%;
    transition: transform 200ms ease;
    cursor: pointer;

    svg {
      color: #fff;
      font-size: 2rem;
      transition: color 200ms ease;
    }

    &:hover {
      background-color: #111;
      transform: scale(1.1);
      svg {
        color: ${({ $hoverColor }) => $hoverColor};
      }
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
    background-color: #111;
    color: #fff;
    padding: 15px;
    border: solid #000 1px;
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
  color: rgb(122, 135, 141);
  font-size: 5rem;
  position: absolute;
  left: ${(props) => props.$left};
  right: ${(props) => props.$right};
  top: ${(props) => props.$top};
  bottom: ${(props) => props.$bottom};
  z-index: -1;
`;
