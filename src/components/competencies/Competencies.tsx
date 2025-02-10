'use client';

import { Fade } from 'react-awesome-reveal';
import { CompetencieItem, CompetenciesList, CompetenciesWrapper } from './style';
import { competencies } from './contract';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomePageLocalRoutes } from '../header/Contract';

export const Competencies = () => {
  return (
    <CompetenciesWrapper id={HomePageLocalRoutes.COMPETENCIES}>
      <h2>Competências</h2>
      <CompetenciesList>
        {competencies.map((competencies, index) => (
          <Fade duration={750} direction={'right'} key={index}>
            <CompetencieItem>
              <FontAwesomeIcon icon={competencies.icon} />
              <div className="textContainer">
                <h3>{competencies.title}</h3>
                <p>{competencies.content}</p>
              </div>
            </CompetencieItem>
          </Fade>
        ))}
      </CompetenciesList>
    </CompetenciesWrapper>
  );
};
