'use client';
import { useTranslations } from 'next-intl';
import { IconDefinition, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

export interface Project {
  id: number;
  title: string;
  description: string;
  isOpenSource: boolean;
  coverImage: string;
  image?: string;
  links?: ProjectLink[];
  initialDate: Date;
  finalDate?: Date;
  tecnologies: string[];
}

export interface ProjectLink {
  link: string;
  label: string;
  icon?: IconDefinition;
}

const LinkIcon = {
  PROJECT: faCirclePlay,
  REPOSITORY: faGithub,
} as const;

const Data = (mes: number, ano: number) => new Date(ano, mes - 1);

export const useGetProjects = () => {
  const t = useTranslations();

  const LinkLabel = {
    REPOSITORY: t('project.linkType.repository'),
    PROJECT: t('project.linkType.project'),
  } as const;

  const projects: Project[] = [
    {
      id: 1,
      title: t('projects.dkpedras.title'),
      description: t('projects.dkpedras.description'),
      isOpenSource: false,
      initialDate: Data(9, 2025),
      finalDate: Data(12, 2025),
      tecnologies: ['React', 'TypeScript', 'Cloudinary', 'Vercel'],
      coverImage: 'https://res.cloudinary.com/dnsc6qj4i/image/upload/v1739128193/dkpedras-cover-image_vfcp4y.png',
      links: [
        {
          link: 'https://dkpedrasdecorativas.com.br',
          label: LinkLabel.PROJECT,
          icon: LinkIcon.PROJECT,
        },
      ],
    },
    {
      id: 2,
      title: t('projects.nutrien.title'),
      description: t('projects.nutrien.description'),
      isOpenSource: false,
      initialDate: Data(3, 2024),
      coverImage:
        'https://res.cloudinary.com/dnsc6qj4i/image/upload/v1739127610/nutrien-solucoes-agricolas2_ef7qgo.jpg',
      tecnologies: [
        'React-Native com Expo para Web',
        'TypeScript',
        'Node',
        'GraphQL',
        'Mikro-ORM',
        'PostgreSQL',
        'Docker',
        'AWS Services',
      ],
    },
    {
      id: 3,
      title: t('projects.sms.title'),
      description: t('projects.sms.description'),
      isOpenSource: true,
      initialDate: Data(2, 2023),
      finalDate: Data(12, 2024),
      tecnologies: [
        'React',
        'TypeScript',
        'NestJs',
        'GraphQL',
        'MongoDb',
        'Docker',
        'NgInx',
        'VM Azure',
        'Python',
        'Flask',
        'TensorFlow',
      ],
      coverImage: 'https://res.cloudinary.com/dnsc6qj4i/image/upload/v1739129069/sms-cover-image_d6qazf.png',
      links: [
        {
          link: 'https://sms.devneemiasvieira.com',
          label: LinkLabel.PROJECT,
          icon: LinkIcon.PROJECT,
        },
        {
          link: 'https://github.com/NeemiasVieira/SistemaDeMonitoramentoDoSolo',
          label: LinkLabel.REPOSITORY,
          icon: LinkIcon.REPOSITORY,
        },
      ],
    },
    {
      id: 4,
      title: t('projects.timekeeping.title'),
      description: t('projects.timekeeping.description'),
      isOpenSource: false,
      initialDate: Data(1, 2024),
      finalDate: Data(3, 2024),
      tecnologies: ['Angular', 'TypeScript', 'Material-UI', 'SQL Server'],
      coverImage: 'https://res.cloudinary.com/dnsc6qj4i/image/upload/v1739129148/modalgr_f5pssd.jpg',
    },
    {
      id: 5,
      title: t('projects.hospital.title'),
      description: t('projects.hospital.description'),
      isOpenSource: false,
      initialDate: Data(9, 2023),
      finalDate: Data(12, 2023),
      tecnologies: ['Java', 'Quarkus', 'Kafka', 'Docker', 'MongoDB'],
      coverImage: 'https://res.cloudinary.com/dnsc6qj4i/image/upload/v1739129334/mv_ndauqt.jpg',
    },
  ];

  return {
    projects,
  };
};
