import styled from "styled-components";

export const FAQWrapper = styled.section`
  padding: 80px 20px;
  margin-bottom: 60px;
  background: ${({ theme }) => theme.colors.element};
`;

export const FAQContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const FAQTitle = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.text};
`;

export const FAQList = styled.div`
  display: grid;
  gap: 14px;
`;

export const FAQItem = styled.div<{ $isOpen: boolean }>`
  border: 1px solid ${({ theme, $isOpen }) => ($isOpen ? theme.colors.primary : theme.colors.border)};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme, $isOpen }) => ($isOpen ? `0 14px 30px -20px ${theme.colors.primary}` : theme.shadows.light)};
  transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.default};
  }
`;

export const FAQQuestion = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: left;
  background: transparent;
  border: 0;
  padding: 22px 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.05rem;
  transition: color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: -2px;
    border-radius: 16px;
  }
`;

export const FAQQuestionText = styled.span`
  padding-right: 14px;
  line-height: 1.45;
`;

export const FAQIcon = styled.span<{ $isOpen: boolean }>`
  position: relative;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.primary};

  svg {
    position: absolute;
    inset: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .icon-plus {
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(90deg) scale(0.7)" : "rotate(0deg) scale(1)")};
  }

  .icon-minus {
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.7)")};
  }
`;

export const FAQAnswer = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? "320px" : "0")};
  overflow: hidden;
  transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease, transform 0.35s ease, margin 0.35s ease,
    padding 0.35s ease;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-6px)")};
  margin: ${({ $isOpen }) => ($isOpen ? "0 24px 18px" : "0 24px")};
  padding-top: ${({ $isOpen }) => ($isOpen ? "4px" : "0")};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;

  p {
    margin: 0;
    line-height: 1.65;
  }
`;
