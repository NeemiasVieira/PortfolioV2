import styled from 'styled-components';

const sharedStyles = `
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;
  margin: 0;
  height: 70px;
  z-index: 2;
  width: 100%;
`;

export const HeaderStyle = styled.header`
  ${sharedStyles}
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.light};
  h1 {
    margin-left: 50px;
    color: ${({ theme }) => theme.colors.text};
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  nav {
    height: 100%;
  }
  nav ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 20px;
    margin-right: 50px;
    height: 100%;
  }

  nav li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  nav a {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: font-weight 200ms ease-in-out, color 200ms ease-in-out;
    height: 100%;
    width: 100%;
    position: relative;
    padding: 0 10px;
    &:hover {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      height: 5px;
      background-color: ${({ theme }) => theme.colors.primary};
      transform: translateX(-50%) scaleX(0);
      transform-origin: center;
      transition: transform 0.3s ease-in-out;
      border-radius: 2px;
    }

    &:hover::after {
      transform: translateX(-50%) scaleX(1);
    }
  }
`;

export const MobileHeaderStyle = styled.header`
  ${sharedStyles}
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.light};
  padding: 0 20px;
  h1 {
    font-size: 1.5rem;
    span {
      color: ${({ theme }) => theme.colors.primary};
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
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: -5px 0px 5px rgba(0, 0, 0, 0.3);
  transition: right 0.4s ease;
  z-index: 1000;
  display: flex;
  flex-flow: column wrap;

  a {
    display: flex;
    width: 100%;
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-flow: column wrap;
    list-style: none;
    color: ${({ theme }) => theme.colors.text};
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-bottom: solid ${({ theme }) => theme.colors.textSecondary} 1px;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    position: relative;

    &:hover {
      font-weight: 800;
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.elementHover};
    }
  }

  @media screen and (max-width: 480px) {
    width: 75%;
    max-width: none;
    right: ${({ $isMenuOpen }) => ($isMenuOpen ? '0' : '-75%')};
    transition: right 0.3s ease;
  }
`;

export const MobileTopMenuActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: solid ${({ theme }) => theme.colors.textSecondary} 1px;
`;

export const CloseMenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 100%;
  transition: background-color 200ms ease-in-out;
  svg {
    aspect-ratio: 1;
    font-size: 1.5rem;
    transition: color 200ms ease-in-out;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.elementHover};
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const MobileApplicationActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const MobileThemeSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  gap: 10px;
`;

export const MobileLanguageSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  gap: 10px;
`;

export const LanguageSelector = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const LanguageButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
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
