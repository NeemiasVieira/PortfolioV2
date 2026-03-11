import styled from "styled-components";

export const DiffWrapper = styled.section`
  padding: 80px 20px;
  background: ${({ theme }) => theme.colors.background};
`;

export const DiffContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  text-align: center;
`;

export const DiffTitle = styled.h2`
  font-size: clamp(2rem, 2.7vw, 2.7rem);
  margin-bottom: 18px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
`;

export const DiffSubtitle = styled.p`
  max-width: 760px;
  margin: 0 auto 60px;
  font-size: 1.05rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const DiffGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const DiffCard = styled.article`
  background: ${({ theme }) => theme.colors.element};
  padding: 28px 26px 24px;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-align: left;
  min-height: 248px;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
  box-shadow: ${({ theme }) => theme.shadows.light};

  &:hover {
    transform: translateY(-7px);
    box-shadow: ${({ theme }) => theme.shadows.default};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DiffCardTag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 30px;
  margin-bottom: 16px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
`;

export const DiffCardTitle = styled.h3`
  font-size: 1.12rem;
  margin-bottom: 12px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text};
`;

export const DiffCardText = styled.p`
  margin: 0;
  line-height: 1.65;
  font-size: 0.96rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const DiffCardFooter = styled.span`
  display: inline-flex;
  margin-top: 18px;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.02em;
`;
