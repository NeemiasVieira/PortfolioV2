import styled from "styled-components";

export const ProcessWrapper = styled.section`
  padding: 80px 20px;
  background: ${({ theme }) => theme.colors.element};
`;

export const ProcessContent = styled.div`
  max-width: 980px;
  margin: 0 auto;
  text-align: center;
`;

export const ProcessTitle = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ProcessSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 60px;
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  max-width: 760px;
  margin: 0 auto;
`;

export const ProcessCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 16px 18px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-align: left;
  transition: 0.3s;
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 14px;
  align-items: start;
  box-shadow: ${({ theme }) => theme.shadows.light};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.default};
  }

  @media (max-width: 640px) {
    grid-template-columns: 34px 1fr;
    gap: 12px;
    padding: 15px 14px;
  }
`;

export const StepNumber = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 1px;
`;

export const ProcessCardTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
`;

export const ProcessCardText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.45;
  text-align: left;
`;
