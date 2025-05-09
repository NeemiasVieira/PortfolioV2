import styled from 'styled-components';

export const CertificationsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
  margin-top: 50px;
  padding: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const CertificationsList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const CertificationItem = styled.li`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 2px;

  h4 {
    font-weight: 700;
  }

  span {
    font-style: italic;
    font-weight: 400;
  }
`;

export const CertificationLink = styled.a`
  margin-top: 5px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.element};
  border: solid ${({ theme }) => theme.colors.border} 1px;
  border-radius: 10px;
  transition: transform 200ms ease-in-out;
  font-weight: 700;

  &:hover {
    transform: scale(1.05);
  }
`;
