'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  DevNeemiasVieiraLogo,
  EndContainer,
  FooterWrapper,
  LogoAndSocialLinksContainer,
  SocialLinkItem,
  SocialLinksList,
} from './style';
import { socialLinksFooter } from './contract';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations();
  return (
    <FooterWrapper>
      <LogoAndSocialLinksContainer>
        <DevNeemiasVieiraLogo>
          <b>Dev</b>NeemiasVieira
        </DevNeemiasVieiraLogo>
        <SocialLinksList>
          {socialLinksFooter.map((item, index) => (
            <SocialLinkItem $hoverColor={item.hoverColor} key={index}>
              <a href={item.link}>
                <FontAwesomeIcon icon={item.icon} />
              </a>
            </SocialLinkItem>
          ))}
        </SocialLinksList>
      </LogoAndSocialLinksContainer>
      <EndContainer>
        <span>{t('allRightsReserved', { year: new Date().getFullYear() })}</span>
        <span>
          {t('poweredBy')}{' '}
          <a href="https://vercel.com" target="_blank">
            Vercel
          </a>
        </span>
      </EndContainer>
    </FooterWrapper>
  );
};
