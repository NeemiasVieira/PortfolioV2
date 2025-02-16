import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  h2 {
    text-align: center;
  }

  @media screen and (max-width: 1023px) {
    font-size: 0.8rem;
  }
`;

export const SkillsList = styled.ul`
  list-style: none;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  max-width: 1200px;
  width: 90%;
  margin: 0;

  @media screen and (max-width: 1023px) {
    max-width: none;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 85%;
  }
`;

export const SkillItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
  margin-top: 5px;

  svg {
    font-size: 2rem;
  }

  .textContainer {
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    gap: 15px;
  }

  @media screen and (max-width: 1023px) {
    svg {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1rem;
      width: 100%;
    }
    p {
      font-size: 0.9rem;
      width: 100%;
    }
  }
`;
