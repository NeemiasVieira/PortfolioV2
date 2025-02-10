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

export const Footer = () => {
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
        <span>Todos os direitos reservados © {new Date().getFullYear()}</span>
        <span>
          Hospedado pela{' '}
          <a href="https://vercel.com" target="_blank">
            Vercel
          </a>
        </span>
      </EndContainer>
    </FooterWrapper>
  );
};
