"use client";

import { useTranslations } from "next-intl";
import {
  DemoWrapper,
  DemoContent,
  DemoHeader,
  DemoEyebrow,
  DemoTitle,
  DemoSubtitle,
  DemoContainer,
  DemoVisual,
  DemoSiteCard,
  DemoBrowserBar,
  DemoBrowserDots,
  DemoDomain,
  DemoSiteImage,
  DemoSiteBadge,
  DemoInfo,
  DemoInfoTitle,
  DemoList,
  DemoButton,
  DemoNote,
} from "./style";

export const Demo = () => {
  const t = useTranslations("landingOdonto.demo");

  return (
    <DemoWrapper id="modelo">
      <DemoContent>
        <DemoHeader>
          <DemoEyebrow>{t("eyebrow")}</DemoEyebrow>
          <DemoTitle>{t("title")}</DemoTitle>
          <DemoSubtitle>{t("subtitle")}</DemoSubtitle>
        </DemoHeader>

        <DemoContainer>
          <DemoVisual>
            <DemoSiteCard>
              <DemoBrowserBar>
                <DemoBrowserDots>
                  <span />
                  <span />
                  <span />
                </DemoBrowserDots>
                <DemoDomain>clinicagabrielamolina.com.br</DemoDomain>
              </DemoBrowserBar>

              <DemoSiteImage src="demo-site.png" alt={t("siteImageAlt")} loading="lazy" />
              <DemoSiteBadge>{t("siteBadge")}</DemoSiteBadge>
            </DemoSiteCard>
          </DemoVisual>

          <DemoInfo>
            <DemoInfoTitle>{t("strategyTitle")}</DemoInfoTitle>

            <DemoList>
              <li>{t("item1")}</li>
              <li>{t("item2")}</li>
              <li>{t("item3")}</li>
              <li>{t("item4")}</li>
            </DemoList>

            <DemoButton href="https://clinicagabrielamolina.com.br" target="_blank" rel="noopener noreferrer">
              {t("cta")}
            </DemoButton>

            <DemoNote>{t("ctaNote")}</DemoNote>
          </DemoInfo>
        </DemoContainer>
      </DemoContent>
    </DemoWrapper>
  );
};
