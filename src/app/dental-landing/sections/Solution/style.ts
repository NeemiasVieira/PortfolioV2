import styled from "styled-components";

export const SolutionWrapper = styled.section`
  padding: 110px 20px;
  background: ${({ theme }) => theme.colors.background};
`;

export const SolutionContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const SolutionHeader = styled.div`
  text-align: center;
  margin-bottom: 46px;
`;

export const SolutionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.element};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const SolutionTitle = styled.h2`
  font-size: clamp(2rem, 2.7vw, 2.6rem);
  margin-bottom: 14px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
`;

export const SolutionSubtitle = styled.p`
  max-width: 760px;
  margin: 0 auto;
  font-size: 1.02rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 26px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const SolutionCard = styled.div`
  background: ${({ theme }) => theme.colors.element};
  padding: 22px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.default};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SolutionCardIndex = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
  height: 28px;
  margin-bottom: 10px;
  padding: 0 10px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

export const SolutionCardTitle = styled.h3`
  font-size: 1.08rem;
  margin-bottom: 10px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text};
`;

export const SolutionCardText = styled.p`
  margin: 0;
  line-height: 1.62;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
`;

export const SolutionFooter = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
`;

export const SolutionFooterText = styled.p`
  margin: 0;
  max-width: 760px;
  font-size: 1rem;
  line-height: 1.55;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const SolutionButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 16px 28px;
  border-radius: 14px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  transition: transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.light};
  min-width: 320px;
  align-self: center;

  &:hover {
    opacity: 0.95;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.default};
  }

  @media (max-width: 560px) {
    width: 100%;
    min-width: 0;
  }
`;
