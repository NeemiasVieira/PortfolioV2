'use client';
import { faFileCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

export const NotFoundPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  height: 100vh;
`;

export const NotFoundAlertContainer = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  padding: 50px;
  border-radius: 12px;
  font-size: 1.8rem;
  white-space: nowrap;

  h1 {
    margin: 0;
  }

  svg {
    font-size: 5rem;
    margin-bottom: 20px;
  }

  button {
    font-size: 1.2rem;
    background-color: transparent;
    border: none;
    -webkit-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    background-color: #222;
    padding: 10px;
    border-radius: 8px;
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
  }

  button:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const NotFoundPage = () => {
  const t = useTranslations();
  const router = useRouter();

  const onClick = () => {
    router.push('/');
  };

  return (
    <NotFoundPageWrapper>
      <NotFoundAlertContainer>
        <FontAwesomeIcon icon={faFileCircleQuestion} />
        <h1>404</h1>
        <span>{t('pageNotFound.title')}</span>
        <button onClick={onClick}>{t('pageNotFound.buttonLabel')}</button>
      </NotFoundAlertContainer>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
