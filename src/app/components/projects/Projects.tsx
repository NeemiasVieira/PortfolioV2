'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomePageLocalRoutes } from '../../../components/header/Contract';
import {
  DetailsButton,
  ProjectDetailsContainer,
  ProjectImage,
  ProjectInfo,
  ProjectItem,
  ProjectLicense,
  ProjectList,
  ProjectsWrapper,
} from './style';
import { getProjectTime } from './utils';
import { faCalendar, faCode, faCodeBranch, faLock } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-awesome-reveal';
import { useTranslations } from 'next-intl';
import { useGetProjects } from '@/hooks/useGetProjects';
import { useLanguageStore } from '@/stores/useLanguageStore';

export const Projects = () => {
  const t = useTranslations();
  const { projects } = useGetProjects();
  const { language } = useLanguageStore();

  const memorizeScroll = () => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    sessionStorage.setItem('needScroll', true.toString());
  };

  return (
    <ProjectsWrapper id={HomePageLocalRoutes.PROJECTS}>
      <h2>Projetos</h2>
      <ProjectList>
        {projects.map((project) => (
          <Fade duration={700} direction="right" key={project.id}>
            <ProjectItem>
              <ProjectImage src={project.coverImage} alt="Project image" width={150} height={150} />
              <ProjectDetailsContainer>
                <h3>{project.title} </h3>
                <ProjectLicense $isOpenSource={project.isOpenSource}>
                  <FontAwesomeIcon icon={project.isOpenSource ? faCodeBranch : faLock} />
                  {project.isOpenSource ? t('project.openSource') : t('project.notOpenSource')}
                </ProjectLicense>
                <ProjectInfo>
                  <FontAwesomeIcon icon={faCode} />
                  <p>
                    <b>{t('project.tecnologies')} </b>
                    {project.tecnologies.join(', ')}.
                  </p>
                </ProjectInfo>
                <ProjectInfo>
                  <FontAwesomeIcon icon={faCalendar} />
                  <p>
                    {getProjectTime({
                      lang: language as 'pt-BR' | 'en',
                      initialDate: project.initialDate,
                      finalDate: project.finalDate,
                    })}
                  </p>
                </ProjectInfo>
                <DetailsButton onClick={memorizeScroll} href={`/projects/${project.id}`}>
                  {t('project.openDetails')}
                </DetailsButton>
              </ProjectDetailsContainer>
            </ProjectItem>
          </Fade>
        ))}
      </ProjectList>
    </ProjectsWrapper>
  );
};
