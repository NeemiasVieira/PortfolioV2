"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useThemeStore } from "@/stores/useThemesStore";
import {
  HeroWrapper,
  HeroContent,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
  HeroHighlights,
  HeroVisual,
  HeroVisualInner,
  HeroVisualBadge,
} from "./style";

export const Hero = () => {
  const t = useTranslations("landingOdonto.hero");
  const selectedTheme = useThemeStore((state) => state.selectedTheme);
  const heroPreviewImage = selectedTheme === "dark" ? "/dental-hero-site-preview-dark.svg" : "/dental-hero-site-preview.svg";

  return (
    <HeroWrapper id="inicio">
      <HeroContent>
        <HeroText>
          <HeroTitle>{t("title")}</HeroTitle>
          <HeroSubtitle>{t("subtitle")}</HeroSubtitle>

          <HeroHighlights>
            <li>{t("highlight1")}</li>
            <li>{t("highlight2")}</li>
            <li>{t("highlight3")}</li>
            <li>{t("highlight4")}</li>
          </HeroHighlights>

          <HeroButtons>
            <PrimaryButton href="https://wa.me/5513996020483" target="_blank">
              {t("ctaPrimary")}
            </PrimaryButton>

            <SecondaryButton href="#modelo">{t("ctaSecondary")}</SecondaryButton>
          </HeroButtons>
        </HeroText>

        <HeroVisual>
          <HeroVisualInner>
            <Image
              src={heroPreviewImage}
              alt={t("imageAlt")}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </HeroVisualInner>
          <HeroVisualBadge>{t("imageBadge")}</HeroVisualBadge>
        </HeroVisual>
      </HeroContent>
    </HeroWrapper>
  );
};
