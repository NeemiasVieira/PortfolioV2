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
`;

export const SocialLinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
  align-items: center;
  justify-content: center;
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
`;
