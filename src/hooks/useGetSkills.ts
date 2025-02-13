import { useTranslations } from 'next-intl';
import { faGear, faCode, faUsers, faHandshake, faRunning, faBuilding } from '@fortawesome/free-solid-svg-icons';

export const useGetSkills = () => {
  const t = useTranslations();

  const skills = [
    {
      title: t('skillsList.projectExperience.title'),
      content: t('skillsList.projectExperience.description'),
      icon: faGear,
    },
    {
      title: t('skillsList.technologyExpert.title'),
      content: t('skillsList.technologyExpert.description'),
      icon: faCode,
    },
    {
      title: t('skillsList.interpersonalSkills.title'),
      content: t('skillsList.interpersonalSkills.description'),
      icon: faUsers,
    },
    {
      title: t('skillsList.clientExperience.title'),
      content: t('skillsList.clientExperience.description'),
      icon: faHandshake,
    },
    {
      title: t('skillsList.agileDevelopment.title'),
      content: t('skillsList.agileDevelopment.description'),
      icon: faRunning,
    },
    {
      title: t('skillsList.softwareArchitecture.title'),
      content: t('skillsList.softwareArchitecture.description'),
      icon: faBuilding,
    },
  ];

  return { skills };
};
