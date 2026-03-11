import styled from "styled-components";

export const ProblemWrapper = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.element};
`;

export const ProblemContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const ProblemHeader = styled.div`
  max-width: 760px;
  margin: 0 auto 34px;
  text-align: center;
`;

export const ProblemBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const ProblemTitle = styled.h2`
  font-size: clamp(2rem, 2.7vw, 2.5rem);
  margin-bottom: 14px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
`;

export const ProblemSubtitle = styled.p`
  margin: 0 auto;
  max-width: 720px;
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ProblemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 16px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const ProblemItem = styled.li`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 14px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: ${({ theme }) => theme.shadows.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.default};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProblemIcon = styled.div`
  width: 34px;
  height: 34px;
  min-width: 34px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.element};
  color: ${({ theme }) => theme.colors.primary};

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const ProblemItemText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  line-height: 1.45;
  font-weight: 500;
`;

export const ProblemConclusion = styled.p`
  margin: 0;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 14px;
  padding: 16px 18px;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.96rem;
  line-height: 1.55;
  font-weight: 600;
`;
