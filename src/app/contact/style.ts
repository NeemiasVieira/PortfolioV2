import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  min-height: 100vh;
  gap: 50px;
  width: 100%;

  @media screen and (max-width: 1023px) {
    margin-top: 70px;
    justify-content: start;

    h1 {
      margin-top: 40px;
    }
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 40px;
  width: 100%;

  @media screen and (max-width: 1023px) {
    gap: 20px;
  }
`;

export const ContactItem = styled.li<{ $hoverColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 500px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 12px;
    width: 100%;
    font-size: 1.4rem;
    background-color: #222;
    padding: 20px;
    border-radius: 12px;
    -webkit-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    transition: all 300ms;
  }

  svg {
    font-size: 2rem;
  }

  &:hover {
    a {
      color: ${({ $hoverColor }) => $hoverColor};
      border: ${({ $hoverColor }) => `solid ${$hoverColor} 2px`};
      font-weight: 800;
    }
  }

  @media screen and (max-width: 1023px) {
    width: 70%;
  }

  @media screen and (max-width: 480px) {
    a {
      padding: 15px;
    }
  }
`;
