"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  PricingWrapper,
  PricingContent,
  PricingTitle,
  PricingSubtitle,
  PricingCarouselControls,
  PricingNavButton,
  PricingDots,
  PricingDot,
  PricingGrid,
  PricingCard,
  PricingBadge,
  PricingPlanTitle,
  PricingPlanDescription,
  PricingList,
  PricingOriginalPrice,
  PricingPrice,
  PricingInstallments,
  PricingPriceHint,
  PricingFeatureLabel,
  PricingFeatureValue,
  PricingFeatureIcon,
  PricingButton,
  PricingSupportNote,
} from "./style";

const featureKeys = [
  "pages",
  "sections",
  "visualCustomization",
  "conversionCopy",
  "treatments",
  "trustElements",
  "contactHub",
  "integrations",
  "customFunctionalities",
  "localSeo",
  "postLaunchSupport",
] as const;

type FeatureKey = (typeof featureKeys)[number];
type PlanKey = "starter" | "growth" | "premium" | "custom";

type PricingPlan = {
  name: string;
  description: string;
  originalPrice?: string;
  price: string;
  installmentText?: string;
  installmentPrice?: string;
  installments?: string;
  priceHint: string;
  badge?: string;
  features: Record<FeatureKey, string>;
};

const planOrder: PlanKey[] = ["starter", "growth", "premium", "custom"];

export const Pricing = () => {
  const t = useTranslations("landingOdonto.pricing");
  const locale = useLocale();
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isEnglish = locale.toLowerCase().startsWith("en");
  const notIncludedText = t("featureNotIncluded");
  const whatsappLink = "https://wa.me/5513996020483";
  const plans = planOrder.map((key) => ({
    key,
    data: t.raw(`plans.${key}`) as PricingPlan,
  }));
  const lastPlanIndex = plans.length - 1;

  const getSlideStep = (container: HTMLDivElement) => {
    const firstSlide = container.firstElementChild as HTMLElement | null;
    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");

    if (!firstSlide) {
      return container.clientWidth;
    }

    return firstSlide.offsetWidth + gap;
  };

  const scrollToPlan = (index: number) => {
    const container = gridRef.current;

    if (!container) {
      return;
    }

    const safeIndex = Math.max(0, Math.min(index, lastPlanIndex));
    const step = getSlideStep(container);
    container.scrollTo({
      left: step * safeIndex,
      behavior: "smooth",
    });
    setActiveIndex(safeIndex);
  };

  useEffect(() => {
    const container = gridRef.current;

    if (!container) {
      return;
    }

    const handleScroll = () => {
      const step = Math.max(getSlideStep(container), 1);
      const currentIndex = Math.round(container.scrollLeft / step);
      setActiveIndex(Math.max(0, Math.min(currentIndex, lastPlanIndex)));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [lastPlanIndex]);

  return (
    <PricingWrapper id="planos">
      <PricingContent>
        <PricingTitle>{t("title")}</PricingTitle>
        <PricingSubtitle>{t("subtitle")}</PricingSubtitle>

        <PricingCarouselControls>
          <PricingNavButton
            type="button"
            onClick={() => scrollToPlan(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label={isEnglish ? "Previous plan" : "Plano anterior"}
          >
            ←
          </PricingNavButton>

          <PricingDots>
            {plans.map(({ key }, index) => (
              <PricingDot
                key={key}
                type="button"
                aria-label={isEnglish ? `Go to plan ${index + 1}` : `Ir para plano ${index + 1}`}
                aria-current={index === activeIndex}
                $active={index === activeIndex}
                onClick={() => scrollToPlan(index)}
              />
            ))}
          </PricingDots>

          <PricingNavButton
            type="button"
            onClick={() => scrollToPlan(activeIndex + 1)}
            disabled={activeIndex === lastPlanIndex}
            aria-label={isEnglish ? "Next plan" : "Próximo plano"}
          >
            →
          </PricingNavButton>
        </PricingCarouselControls>

        <PricingGrid ref={gridRef}>
          {plans.map(({ key, data }) => {
            const isHighlighted = key === "growth";
            const isCustomPlan = key === "custom";

            return (
              <PricingCard key={key} $highlighted={isHighlighted}>
                {data.badge && <PricingBadge $highlighted={isHighlighted}>{data.badge}</PricingBadge>}

                <PricingPlanTitle>{data.name}</PricingPlanTitle>
                <PricingPlanDescription>{data.description}</PricingPlanDescription>

                {data.originalPrice && <PricingOriginalPrice>{data.originalPrice}</PricingOriginalPrice>}
                <PricingPrice>{data.price}</PricingPrice>
                {!isEnglish && (data.installmentPrice || data.installments) && (
                  <PricingInstallments>
                    {data.installmentPrice
                      ? `${data.installmentText ?? "ou 12x de"} ${data.installmentPrice}`
                      : `ou ${data.installments}`}
                  </PricingInstallments>
                )}
                <PricingPriceHint>{data.priceHint}</PricingPriceHint>

                <PricingList>
                  {featureKeys.map((featureKey) => {
                    const featureValue = data.features[featureKey];
                    const isIncluded = featureValue !== notIncludedText;

                    return (
                      <li key={featureKey}>
                        <PricingFeatureLabel>{t(`features.${featureKey}`)}</PricingFeatureLabel>
                        <PricingFeatureValue $included={isIncluded}>
                          <PricingFeatureIcon $included={isIncluded}>{isIncluded ? "✓" : "✕"}</PricingFeatureIcon>
                          <span>{featureValue}</span>
                        </PricingFeatureValue>
                      </li>
                    );
                  })}
                </PricingList>

                <PricingButton href={whatsappLink} target="_blank" $secondary={isCustomPlan}>
                  {isCustomPlan ? t("ctaCustom") : t("ctaDefault")}
                </PricingButton>
              </PricingCard>
            );
          })}
        </PricingGrid>

        <PricingSupportNote>{t("supportNote")}</PricingSupportNote>
      </PricingContent>
    </PricingWrapper>
  );
};
