import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  min-height: 90vh;
  gap: 50px;
  width: 100%;
  margin-top: 70px;

  h1 {
    margin: 0;
  }

  @media screen and (max-width: 1023px) {
    margin-top: 70px;
    justify-content: start;

    h1 {
      margin: 30px 0 0 0;
    }
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 30px;
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
    background-color: ${({ theme }) => theme.colors.element};
    padding: 20px;
    border-radius: 12px;
    -webkit-box-shadow: ${({ theme }) => theme.shadows.default};
    -moz-box-shadow: ${({ theme }) => theme.shadows.default};
    box-shadow: ${({ theme }) => theme.shadows.default};
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
