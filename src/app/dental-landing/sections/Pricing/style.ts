import styled, { css } from "styled-components";

export const PricingWrapper = styled.section`
  padding: 96px 20px;
  background: ${({ theme }) => theme.colors.background};
`;

export const PricingContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
`;

export const PricingTitle = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PricingSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 34px;
`;

export const PricingCarouselControls = styled.div`
  display: none;

  @media (max-width: 1160px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 12px;
  }
`;

export const PricingNavButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.element};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const PricingDots = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export const PricingDot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "20px" : "8px")};
  height: 8px;
  border-radius: 999px;
  border: 0;
  padding: 0;
  cursor: pointer;
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.border)};
  transition: 0.25s ease;
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1160px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    gap: 12px;
    padding: 2px 2px 8px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const PricingCard = styled.article<{ $highlighted?: boolean }>`
  background: ${({ theme }) => theme.colors.element};
  padding: 20px 16px;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.light};
  text-align: left;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: 0.3s;

  ${({ $highlighted, theme }) =>
    $highlighted &&
    css`
      border-color: ${theme.colors.primary};
      box-shadow: ${theme.shadows.default};

      @media (min-width: 1161px) {
        transform: translateY(-4px);
      }
    `}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ $highlighted, theme }) =>
      $highlighted ? theme.colors.primary : theme.colors.border};
  }

  @media (max-width: 1160px) {
    min-width: 100%;
    scroll-snap-align: start;
  }
`;

export const PricingBadge = styled.span<{ $highlighted?: boolean }>`
  align-self: flex-start;
  background: ${({ $highlighted, theme }) =>
    $highlighted ? theme.colors.primary : theme.colors.elementHover};
  color: ${({ $highlighted, theme }) => ($highlighted ? "#fff" : theme.colors.text)};
  border-radius: 999px;
  padding: 5px 10px;
  font-size: 0.73rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const PricingPlanTitle = styled.h3`
  font-size: 1.12rem;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PricingPlanDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.87rem;
  line-height: 1.35;
  min-height: 46px;
  margin-bottom: 12px;
`;

export const PricingPrice = styled.div`
  font-size: 1.72rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PricingOriginalPrice = styled.div`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: line-through;
  margin-bottom: 4px;
`;

export const PricingInstallments = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 6px;
`;

export const PricingPriceHint = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 12px;
  line-height: 1.4;
  min-height: 30px;
`;

export const PricingList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 14px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  li {
    padding: 8px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const PricingFeatureLabel = styled.p`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 4px;
`;

export const PricingFeatureValue = styled.div<{ $included: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 0.82rem;
  line-height: 1.4;
  color: ${({ $included, theme }) =>
    $included ? theme.colors.text : theme.colors.textSecondary};
`;

export const PricingFeatureIcon = styled.span<{ $included: boolean }>`
  width: 14px;
  height: 14px;
  min-width: 14px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.62rem;
  color: #fff;
  margin-top: 2px;
  background: ${({ $included, theme }) =>
    $included ? theme.colors.success : theme.colors.error};
`;

export const PricingButton = styled.a<{ $secondary?: boolean }>`
  margin-top: auto;
  text-align: center;
  padding: 10px 14px;
  border-radius: 9px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.86rem;
  transition: 0.3s;
  border: 1px solid
    ${({ $secondary, theme }) => ($secondary ? theme.colors.border : theme.colors.primary)};
  background: ${({ $secondary, theme }) =>
    $secondary ? theme.colors.background : theme.colors.primary};
  color: ${({ $secondary, theme }) => ($secondary ? theme.colors.text : "#fff")};

  &:hover {
    opacity: 0.92;
    transform: translateY(-2px);
  }
`;

export const PricingSupportNote = styled.p`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.45;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
`;
