'use client';

import { Fade } from 'react-awesome-reveal';
import { SkillItem, SkillsList, SkillsWrapper } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomePageLocalRoutes } from '../../../components/header/Contract';
import { useTranslations } from 'next-intl';
import { useGetSkills } from '@/hooks/useGetSkills';

export const Skills = () => {
  const t = useTranslations();
  const { skills } = useGetSkills();
  return (
    <SkillsWrapper id={HomePageLocalRoutes.SKILLS}>
      <h2>{t('skills')}</h2>
      <SkillsList>
        {skills.map((skill, index) => (
          <Fade duration={750} direction={'right'} key={index}>
            <SkillItem>
              <FontAwesomeIcon icon={skill.icon} />
              <div className="textContainer">
                <h3>{skill.title}</h3>
                <p>{skill.content}</p>
              </div>
            </SkillItem>
          </Fade>
        ))}
      </SkillsList>
    </SkillsWrapper>
  );
};
