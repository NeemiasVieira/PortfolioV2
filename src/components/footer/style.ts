'use client';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 60%;
  max-width: 1400px;
  justify-self: center;
  margin: 20px 0;

  @media screen and (max-width: 1080px) {
    width: 90%;
  }
`;

export const LogoAndSocialLinksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding-bottom: 20px;
`;

export const DevNeemiasVieiraLogo = styled.span`
  font-weight: 700;
  color: var(--primary-color);
  font-size: 2rem;

  b {
    color: #fff;
  }

  @media screen and (max-width: 1080px) {
    font-size: 1.2rem;
  }
`;

export const SocialLinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1080px) {
    gap: 12px;
  }
`;

export const SocialLinkItem = styled.li<{ $hoverColor: string }>`
  svg {
    color: #7a878d;
    font-size: 1.6rem;
    transition: color 200ms ease-in-out;
    &:hover {
      color: ${({ $hoverColor }) => $hoverColor};
    }
  }

  @media screen and (max-width: 1080px) {
    svg {
      font-size: 1.3rem;
    }
  }
`;

export const EndContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 10px;
  color: #7a878d;
  border-top: solid 1px #7a878d;
  padding-top: 20px;
  width: 100%;
  a {
    color: var(--primary-color);
  }

  @media screen and (max-width: 1080px) {
    font-size: 0.9rem;
  }
`;
