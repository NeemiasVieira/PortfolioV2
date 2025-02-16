import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;

  b {
    color: ${({ theme }) => theme.colors.text};
  }

  @media screen and (max-width: 1080px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
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

  @media screen and (max-width: 480px) {
    svg {
      font-size: 1.2rem;
    }
  }
`;

export const EndContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-top: solid 1px ${({ theme }) => theme.colors.textSecondary};
  padding-top: 20px;
  width: 100%;
  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  @media screen and (max-width: 1080px) {
    font-size: 0.9rem;
  }
`;

export const FooterContainer = styled.div`
  width: 60%;
  @media screen and (max-width: 1080px) {
    width: 85%;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;
