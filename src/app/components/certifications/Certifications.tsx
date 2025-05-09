import { HomePageLocalRoutes } from '@/components/header/Contract';
import { certifications } from './contract';
import { CertificationItem, CertificationLink, CertificationsList, CertificationsWrapper } from './style';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
export const Certifications = () => {
  const t = useTranslations();

  return (
    <CertificationsWrapper id={HomePageLocalRoutes.CERTIFICATIONS}>
      <h2>{t('header.certifications')}</h2>
      <CertificationsList>
        {certifications.map((certification, index) => (
          <CertificationItem key={index}>
            <Image src={certification.image} alt="Certification Icon" width={175} height={175} />
            <h4>{certification.name}</h4>
            {certification.code && <span>{certification.code}</span>}
            <CertificationLink href={certification.link} target="_blank">
              {t('certification.link')}
            </CertificationLink>
          </CertificationItem>
        ))}
      </CertificationsList>
    </CertificationsWrapper>
  );
};
