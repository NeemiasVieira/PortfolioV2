import styled from "styled-components";

export const DemoWrapper = styled.section`
  padding: 80px 20px;
  background: ${({ theme }) => theme.colors.element};
`;

export const DemoContent = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

export const DemoHeader = styled.div`
  text-align: center;
  margin-bottom: 56px;
`;

export const DemoEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  padding: 8px 14px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const DemoTitle = styled.h2`
  font-size: clamp(2rem, 2.8vw, 2.7rem);
  margin-bottom: 16px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
`;

export const DemoSubtitle = styled.p`
  max-width: 760px;
  margin: 0 auto;
  font-size: 1.05rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const DemoContainer = styled.div`
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 28px;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const DemoVisual = styled.div`
  display: grid;
`;

export const DemoSiteCard = styled.article`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.default};
  position: relative;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.strong};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DemoBrowserBar = styled.div`
  height: 48px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.element};
`;

export const DemoBrowserDots = styled.div`
  display: inline-flex;
  gap: 6px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    &:nth-child(1) {
      background: #ff5f57;
    }

    &:nth-child(2) {
      background: #febc2e;
    }

    &:nth-child(3) {
      background: #28c840;
    }
  }
`;

export const DemoDomain = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.84rem;
  font-weight: 600;
`;

export const DemoSiteImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
  transition: transform 0.45s ease;

  ${DemoSiteCard}:hover & {
    transform: scale(1.03);
  }
`;

export const DemoSiteBadge = styled.span`
  position: absolute;
  left: 16px;
  bottom: 16px;
  padding: 8px 12px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.02em;
`;

export const DemoInfo = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: ${({ theme }) => theme.shadows.light};
`;

export const DemoInfoTitle = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text};
`;

export const DemoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;

  li {
    position: relative;
    padding: 12px 0 12px 32px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    line-height: 1.6;
    font-size: 0.94rem;
    color: ${({ theme }) => theme.colors.textSecondary};

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      top: 12px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primary};
      color: #fff;
      font-size: 0.76rem;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    &:last-child {
      border-bottom: 0;
    }
  }
`;

export const DemoButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 14px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.light};

  &:hover {
    opacity: 0.94;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.default};
  }
`;

export const DemoNote = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.88rem;
  line-height: 1.55;

  @media (max-width: 600px) {
    font-size: 0.86rem;
  }
`;
