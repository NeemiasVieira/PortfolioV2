'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomePageLocalRoutes } from '../header/Contract';
import { projects } from './contract';
import {
  DetailsButton,
  ProjectDetailsContainer,
  ProjectInfo,
  ProjectItem,
  ProjectLicense,
  ProjectList,
  ProjectsWrapper,
} from './style';
import { getProjectTime } from './utils';
import { faAlignRight, faCalendar, faCode, faCodeBranch, faLock } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-awesome-reveal';

export const Projects = () => {
  return (
    <ProjectsWrapper id={HomePageLocalRoutes.PROJECTS}>
      <h2>Projetos</h2>
      <ProjectList>
        {projects.map((project) => (
          <Fade duration={700} direction="right" key={project.id}>
            <ProjectItem>
              <img src={project.coverImage} alt="teste" />
              <ProjectDetailsContainer>
                <h3>{project.title} </h3>
                <ProjectLicense $isOpenSource={project.isOpenSource}>
                  <FontAwesomeIcon icon={project.isOpenSource ? faCodeBranch : faLock} />
                  {project.isOpenSource ? 'Open Source' : 'Código Privado'}
                </ProjectLicense>
                {/* <ProjectInfo>
                  <FontAwesomeIcon icon={faAlignRight} />
                  <p>
                    <b>Descrição: </b> {project.description.split('.')[0]}
                  </p>
                </ProjectInfo> */}
                <ProjectInfo>
                  <FontAwesomeIcon icon={faCode} />
                  <p>
                    <b>Tecnologias: </b>
                    {project.tecnologies.join(', ')}.
                  </p>
                </ProjectInfo>
                <ProjectInfo>
                  <FontAwesomeIcon icon={faCalendar} />
                  <p>{getProjectTime(project.initialDate, project.finalDate)}</p>
                </ProjectInfo>
                <DetailsButton onClick={() => {}} href={`/projects/${project.id}`}>
                  Ver detalhes
                </DetailsButton>
              </ProjectDetailsContainer>
            </ProjectItem>
          </Fade>
        ))}
      </ProjectList>
    </ProjectsWrapper>
  );
};
