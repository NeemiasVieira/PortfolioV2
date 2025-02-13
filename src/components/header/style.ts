'use client';
import styled from 'styled-components';

const sharedStyles = `
  box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;
  color: #fff;
  margin: 0;
  height: 70px;
  z-index: 2;
  background-color: #1b1b1b;
  width: 100%;
`;

export const HeaderStyle = styled.header`
  ${sharedStyles}
  h1 {
    margin-left: 50px;
    span {
      color: var(--primary-color);
    }
  }
  nav ul {
    display: flex;
    list-style: none;
    gap: 40px;
    margin-right: 50px;
  }
  nav a {
    cursor: pointer;
    transition: font-weight 200ms ease-in-out, color 200ms ease-in-out;
    &:hover {
      font-weight: 700;
      color: var(--primary-color);
    }
  }
`;

export const MobileHeaderStyle = styled.header`
  ${sharedStyles}
  padding: 0 20px;
  h1 {
    font-size: 1.5rem;
    span {
      color: var(--primary-color);
    }
  }
`;

export const ToggleMenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    font-size: 2rem;
  }
`;

export const MobileMenu = styled.div<{ $isMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isMenuOpen }) => ($isMenuOpen ? '0' : '-55%')};
  width: 55%;
  max-width: 300px;
  height: 100%;
  background-color: #1b1b1b;
  box-shadow: -5px 0px 5px rgba(0, 0, 0, 0.3);
  transition: right 0.4s ease;
  z-index: 1000;
  display: flex;
  flex-flow: column wrap;

  a {
    display: flex;
    width: 100%;
  }

  nav ul {
    display: flex;
    flex-flow: column wrap;
    list-style: none;
    color: #fff;
  }
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-bottom: solid #79878c 1px;
    cursor: pointer;

    &:hover {
      font-weight: 700;
      color: var(--primary-color);
      background-color: #333;
    }
  }
  nav a {
    cursor: pointer;
    transition: font-weight 200ms ease-in-out, color 200ms ease-in-out;
  }
`;

export const CloseMenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  padding: 15px;
  svg {
    font-size: 1.5rem;
  }
`;

export const LanguageSelector = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const LanguageButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  img {
    aspect-ratio: 5/3;
    width: 30px;
    border-radius: 20%;
    object-fit: cover;
  }
`;

export const MobileLanguageSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  gap: 10px;
  position: absolute;
  top: 15px;
  right: 15px;
`;
