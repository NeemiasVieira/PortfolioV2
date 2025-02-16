'use client';
import { useParams } from 'next/navigation';
import {
  Actions,
  BackButton,
  LGPDWarn,
  ProjectContent,
  ProjectDetailsWrapper,
  ProjectImage,
  ProjectInformation,
  ProjectLink,
} from './style';
import { useMemo } from 'react';
import { ProjectInfo, ProjectLicense } from '@/app/components/projects/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignRight,
  faArrowLeft,
  faCircleInfo,
  faCode,
  faCodeBranch,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';
import { useGetProjects } from '@/hooks/useGetProjects';
import { useRouter } from 'next/navigation';

const ProjectPage = () => {
  const { id } = useParams();
  const t = useTranslations();
  const { projects } = useGetProjects();
  const router = useRouter();

  const onBack = () => {
    router.push('/');
  };

  const project = useMemo(() => projects.find((project) => project.id === Number(id)), [id, projects]);

  if (!project) return;

  return (
    <ProjectDetailsWrapper>
      <BackButton onClick={onBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
        {t('back')}
      </BackButton>
      <ProjectContent>
        <ProjectImage src={project.image ?? project.coverImage} alt={'Project image'} />
        <ProjectInformation>
          <h1>{project.title}</h1>
          <ProjectLicense $isOpenSource={project.isOpenSource}>
            <FontAwesomeIcon icon={project.isOpenSource ? faCodeBranch : faLock} />
            {project.isOpenSource ? t('project.openSource') : t('project.notOpenSource')}
          </ProjectLicense>
          <ProjectInfo>
            <FontAwesomeIcon icon={faAlignRight} size="xl" />
            <p>
              <b>{t('project.description')}</b> {project.description}
            </p>
          </ProjectInfo>
          <ProjectInfo>
            <FontAwesomeIcon icon={faCode} size="xl" />
            <p>
              <b>{t('project.tecnologies')} </b>
              {project.tecnologies.join(', ')}.
            </p>
          </ProjectInfo>
          {!project.links && !project.isOpenSource && (
            <LGPDWarn>
              <div className="titleAndIcon">
                <FontAwesomeIcon icon={faCircleInfo} size="xl" />
                <strong>{t('privateProjectInfo.title')}</strong>
              </div>

              <p>{t('privateProjectInfo.description')}</p>
            </LGPDWarn>
          )}

          <Actions>
            {project.links &&
              project.links.map((item) => (
                <ProjectLink key={item.link} href={item.link} target="_blank">
                  {item.icon && <FontAwesomeIcon icon={item.icon} />}
                  {item.label}
                </ProjectLink>
              ))}
          </Actions>
        </ProjectInformation>
      </ProjectContent>
    </ProjectDetailsWrapper>
  );
};

export default ProjectPage;
