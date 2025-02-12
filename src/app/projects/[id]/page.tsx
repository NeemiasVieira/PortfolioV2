'use client';
import { useParams } from 'next/navigation';
import {
  Actions,
  LGPDWarn,
  ProjectContent,
  ProjectDetailsWrapper,
  ProjectImage,
  ProjectInformation,
  ProjectLink,
} from './style';
import { useMemo } from 'react';
import { projects } from '@/components/projects/contract';
import { ProjectInfo, ProjectLicense } from '@/components/projects/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight, faCircleInfo, faCode, faCodeBranch, faLock } from '@fortawesome/free-solid-svg-icons';

const privateProjectInfo = {
  title: 'Projeto protegido por licenciamento e/ou acordos de confidencialidade.',
  description: `
    Por questões legais, como a LGPD (Lei Geral de Proteção de Dados) e políticas de privacidade corporativas, os links de visualização do projeto e repositórios não estão disponíveis. 
    O código-fonte é proprietário e protegido por licenças específicas, garantindo a segurança e a integridade das informações envolvidas.
  `,
};

const ProjectPage = () => {
  const { id } = useParams();

  const project = useMemo(() => projects.find((project) => project.id === Number(id)), []);

  if (!project) return;

  return (
    <ProjectDetailsWrapper>
      <ProjectContent>
        <ProjectImage src={project.image ?? project.coverImage} alt={'Project image'} />
        <ProjectInformation>
          <h1>{project.title}</h1>
          <ProjectLicense $isOpenSource={project.isOpenSource}>
            <FontAwesomeIcon icon={project.isOpenSource ? faCodeBranch : faLock} />
            {project.isOpenSource ? 'Open Source' : 'Código Privado'}
          </ProjectLicense>
          <ProjectInfo>
            <FontAwesomeIcon icon={faAlignRight} />
            <p>
              <b>Descrição: </b> {project.description}
            </p>
          </ProjectInfo>
          <ProjectInfo>
            <FontAwesomeIcon icon={faCode} />
            <p>
              <b>Tecnologias: </b>
              {project.tecnologies.join(', ')}.
            </p>
          </ProjectInfo>
          {!project.links && !project.isOpenSource && (
            <LGPDWarn>
              <div className="titleAndIcon">
                {' '}
                <FontAwesomeIcon icon={faCircleInfo} />
                <strong>{privateProjectInfo.title}</strong>
              </div>

              <p>{privateProjectInfo.description}</p>
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
