"use client";

import { useTranslations } from "next-intl";
import {
  DiffWrapper,
  DiffContent,
  DiffTitle,
  DiffSubtitle,
  DiffGrid,
  DiffCard,
  DiffCardTag,
  DiffCardTitle,
  DiffCardText,
  DiffCardFooter,
} from "./style";

export const Differentials = () => {
  const t = useTranslations("landingOdonto.differentials");
  const cards = [
    { title: t("card1Title"), text: t("card1Text") },
    { title: t("card2Title"), text: t("card2Text") },
    { title: t("card3Title"), text: t("card3Text") },
    { title: t("card4Title"), text: t("card4Text") },
    { title: t("card5Title"), text: t("card5Text") },
    { title: t("card6Title"), text: t("card6Text") },
  ];

  return (
    <DiffWrapper id="diferenciais">
      <DiffContent>
        <DiffTitle>{t("title")}</DiffTitle>
        <DiffSubtitle>{t("subtitle")}</DiffSubtitle>

        <DiffGrid>
          {cards.map((card, index) => (
            <DiffCard key={card.title}>
              <DiffCardTag>{String(index + 1).padStart(2, "0")}</DiffCardTag>
              <DiffCardTitle>{card.title}</DiffCardTitle>
              <DiffCardText>{card.text}</DiffCardText>
              <DiffCardFooter>{t("cardFooter")}</DiffCardFooter>
            </DiffCard>
          ))}
        </DiffGrid>
      </DiffContent>
    </DiffWrapper>
  );
};
