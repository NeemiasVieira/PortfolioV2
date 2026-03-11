"use client";

import { useTranslations } from "next-intl";
import {
  ProcessWrapper,
  ProcessContent,
  ProcessTitle,
  ProcessSubtitle,
  ProcessGrid,
  ProcessCard,
  StepNumber,
  ProcessCardTitle,
  ProcessCardText,
} from "./style";

export const Process = () => {
  const t = useTranslations("landingOdonto.process");
  const steps = [
    { title: t("step1Title"), text: t("step1Text") },
    { title: t("step2Title"), text: t("step2Text") },
    { title: t("step3Title"), text: t("step3Text") },
    { title: t("step4Title"), text: t("step4Text") },
  ];

  return (
    <ProcessWrapper id="processo">
      <ProcessContent>
        <ProcessTitle>{t("title")}</ProcessTitle>
        <ProcessSubtitle>{t("subtitle")}</ProcessSubtitle>

        <ProcessGrid>
          {steps.map((step, index) => (
            <ProcessCard key={step.title}>
              <StepNumber>{index + 1}</StepNumber>
              <div>
                <ProcessCardTitle>{step.title}</ProcessCardTitle>
                <ProcessCardText>{step.text}</ProcessCardText>
              </div>
            </ProcessCard>
          ))}
        </ProcessGrid>
      </ProcessContent>
    </ProcessWrapper>
  );
};
