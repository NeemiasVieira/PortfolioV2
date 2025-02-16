'use client';
import { Fade } from 'react-awesome-reveal';
import { TecnologiesList, TecnologiesWrapper, TecnologyItem } from './style';
import {
  SiReact,
  SiTypescript,
  SiGraphql,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiAmazonwebservices,
} from 'react-icons/si';
import { HomePageLocalRoutes } from '../../../components/header/Contract';
import useBreakpoints from '@/hooks/useBreakpoints';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

const tecnologies = [
  { icon: SiTypescript, hoverColor: '#3178C6', link: 'https://www.typescriptlang.org/', name: 'TypeScript' },
  { icon: SiNodedotjs, hoverColor: '#339933', link: 'https://nodejs.org/', name: 'Node.js' },
  { icon: SiReact, hoverColor: '#61DAFB', link: 'https://react.dev/', name: 'React' },
  { icon: SiGraphql, hoverColor: '#E10098', link: 'https://graphql.org/', name: 'GraphQL' },
  { icon: SiMongodb, hoverColor: '#47A248', link: 'https://www.mongodb.com/', name: 'MongoDB' },
  { icon: SiPostgresql, hoverColor: '#336791', link: 'https://www.postgresql.org/', name: 'PostgreSQL' },
  { icon: SiAmazonwebservices, hoverColor: '#FF9900', link: 'https://aws.amazon.com/', name: 'AWS Services' },
];

export const Tecnologies = () => {
  const { isMobile, isTablet } = useBreakpoints();
  const t = useTranslations();

  const size = useMemo(() => {
    return isMobile || isTablet ? 25 : 50;
  }, [isTablet, isMobile]);

  return (
    <TecnologiesWrapper id={HomePageLocalRoutes.TECNOLOGIES}>
      <h2>{t('tecnologies')}</h2>
      <Fade duration={750} direction="right">
        <TecnologiesList>
          {tecnologies.map((tech, index) => (
            <TecnologyItem $hoverColor={tech.hoverColor} key={index}>
              <a href={tech.link} target="_blank">
                <tech.icon size={size} style={{ margin: '10px' }} />
              </a>
              <span>{tech.name}</span>
            </TecnologyItem>
          ))}
        </TecnologiesList>
      </Fade>
    </TecnologiesWrapper>
  );
};
