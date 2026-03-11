"use client";

import { useTranslations } from "next-intl";
import {
  SolutionWrapper,
  SolutionContent,
  SolutionHeader,
  SolutionEyebrow,
  SolutionTitle,
  SolutionSubtitle,
  SolutionGrid,
  SolutionCard,
  SolutionCardIndex,
  SolutionCardTitle,
  SolutionCardText,
  SolutionFooterText,
  SolutionFooter,
  SolutionButton,
} from "./style";

const Solution = () => {
  const t = useTranslations("landingOdonto.solution");
  const cards = [
    { title: t("card1Title"), text: t("card1Text") },
    { title: t("card2Title"), text: t("card2Text") },
    { title: t("card3Title"), text: t("card3Text") },
    { title: t("card4Title"), text: t("card4Text") },
  ];

  return (
    <SolutionWrapper id="solucao">
      <SolutionContent>
        <SolutionHeader>
          <SolutionEyebrow>{t("eyebrow")}</SolutionEyebrow>
          <SolutionTitle>{t("title")}</SolutionTitle>
          <SolutionSubtitle>{t("subtitle")}</SolutionSubtitle>
        </SolutionHeader>

        <SolutionGrid>
          {cards.map((card, index) => (
            <SolutionCard key={card.title}>
              <SolutionCardIndex>{String(index + 1).padStart(2, "0")}</SolutionCardIndex>
              <SolutionCardTitle>{card.title}</SolutionCardTitle>
              <SolutionCardText>{card.text}</SolutionCardText>
            </SolutionCard>
          ))}
        </SolutionGrid>

        <SolutionFooter>
          <SolutionFooterText>{t("footer")}</SolutionFooterText>
          <SolutionButton href="https://wa.me/5513996020483" target="_blank" rel="noopener noreferrer">
            {t("cta")}
          </SolutionButton>
        </SolutionFooter>
      </SolutionContent>
    </SolutionWrapper>
  );
};

export default Solution;
