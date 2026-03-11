import styled from "styled-components";

export const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  padding: 120px 20px 60px 20px;

  &::before {
    content: "";
    position: absolute;
    inset: -20% -10% -20% 40%;
    background: radial-gradient(circle at 30% 50%, rgba(79, 162, 193, 0.22), transparent 70%);
    filter: blur(6px);
    pointer-events: none;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(340px, 500px);
  gap: 42px;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    gap: 30px;
    grid-template-columns: minmax(0, 1fr) minmax(290px, 420px);
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroText = styled.div`
  max-width: 700px;
  padding: 12px 4px;

  @media (max-width: 850px) {
    max-width: 100%;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 30px;
`;

export const HeroHighlights = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 14px 28px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadows.default};
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled.a`
  background: ${({ theme }) => theme.colors.element};
  color: ${({ theme }) => theme.colors.text};
  padding: 14px 28px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.elementHover};
  }
`;

export const HeroVisual = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  justify-self: end;

  @media (max-width: 850px) {
    justify-self: start;
    max-width: 100%;
  }
`;

export const HeroVisualInner = styled.div`
  width: 100%;
  aspect-ratio: 14 / 10;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.strong};
  background: ${({ theme }) => theme.colors.element};

  img {
    object-fit: cover;
  }
`;

export const HeroVisualBadge = styled.div`
  position: absolute;
  left: 18px;
  bottom: 18px;
  border-radius: 999px;
  padding: 9px 14px;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #fff;
  background: rgba(34, 34, 34, 0.72);
  backdrop-filter: blur(6px);
`;
