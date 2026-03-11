"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBullseye,
  faFileLines,
  faHome,
  faLayerGroup,
  faTag,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  CloseMenuButton,
  HeaderStyle,
  LanguageButton,
  LanguageSelector,
  MobileApplicationActions,
  MobileHeaderStyle,
  MobileLanguageSelector,
  MobileMenu,
  MobileThemeSelector,
  MobileTopMenuActions,
  ToggleMenuButton,
} from "@/components/header/style";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { ToggleThemeButton } from "@/components/buttons/toggle-theme";
import { useTheme } from "@/stores/useThemesStore";
import useBreakpoints from "@/hooks/useBreakpoints";

const sectionIds = {
  home: "inicio",
  problem: "problema",
  solution: "solucao",
  demo: "modelo",
  pricing: "planos",
  faq: "faq",
} as const;

export const DentalLandingHeader = () => {
  const t = useTranslations("landingOdonto.nav");
  const { isMobile, isTablet } = useBreakpoints();
  const { language, setLanguage } = useLanguageStore();
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    const headerHeight = 82;
    const targetY = element.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const handleAnchorNavigation = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    closeMenu();
    scrollToSection(id);
  };

  if (isMobile || isTablet) {
    return (
      <MobileHeaderStyle>
        <Link href={`#${sectionIds.home}`} onClick={(e) => handleAnchorNavigation(e, sectionIds.home)}>
          <h1>
            Dev<span>NeemiasVieira</span>
          </h1>
        </Link>

        <ToggleMenuButton onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} color={theme.colors.text} />
        </ToggleMenuButton>

        <MobileMenu $isMenuOpen={isMenuOpen}>
          <MobileTopMenuActions>
            <CloseMenuButton onClick={toggleMenu}>
              <FontAwesomeIcon icon={faXmark} color={theme.colors.text} />
            </CloseMenuButton>

            <MobileApplicationActions>
              <MobileThemeSelector>
                <ToggleThemeButton />
              </MobileThemeSelector>
              <MobileLanguageSelector>
                <LanguageButton $active={language === "pt-BR"} onClick={() => setLanguage("pt-BR")}>
                  <img src="https://flagcdn.com/w40/br.png" alt="Português" />
                </LanguageButton>
                <LanguageButton $active={language === "en"} onClick={() => setLanguage("en")}>
                  <img src="https://flagcdn.com/w40/us.png" alt="English" />
                </LanguageButton>
              </MobileLanguageSelector>
            </MobileApplicationActions>
          </MobileTopMenuActions>

          <nav>
            <ul>
              <li onClick={(e) => handleAnchorNavigation(e, sectionIds.home)}>
                <FontAwesomeIcon icon={faHome} />
                <a href={`#${sectionIds.home}`}>{t("home")}</a>
              </li>
              <li onClick={(e) => handleAnchorNavigation(e, sectionIds.problem)}>
                <FontAwesomeIcon icon={faBullseye} />
                <a href={`#${sectionIds.problem}`}>{t("problem")}</a>
              </li>
              <li onClick={(e) => handleAnchorNavigation(e, sectionIds.solution)}>
                <FontAwesomeIcon icon={faLayerGroup} />
                <a href={`#${sectionIds.solution}`}>{t("solution")}</a>
              </li>
              <li onClick={(e) => handleAnchorNavigation(e, sectionIds.demo)}>
                <FontAwesomeIcon icon={faFileLines} />
                <a href={`#${sectionIds.demo}`}>{t("demo")}</a>
              </li>
              <li onClick={(e) => handleAnchorNavigation(e, sectionIds.pricing)}>
                <FontAwesomeIcon icon={faTag} />
                <a href={`#${sectionIds.pricing}`}>{t("pricing")}</a>
              </li>
              <li onClick={(e) => handleAnchorNavigation(e, sectionIds.faq)}>
                <FontAwesomeIcon icon={faFileLines} />
                <a href={`#${sectionIds.faq}`}>{t("faq")}</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faWhatsapp} />
                <a href="https://wa.me/5513996020483" target="_blank" rel="noopener noreferrer">
                  {t("cta")}
                </a>
              </li>
            </ul>
          </nav>
        </MobileMenu>
      </MobileHeaderStyle>
    );
  }

  return (
    <HeaderStyle>
      <Link href={`#${sectionIds.home}`} onClick={(e) => handleAnchorNavigation(e, sectionIds.home)}>
        <h1>
          Dev<span>NeemiasVieira</span>
        </h1>
      </Link>

      <nav>
        <ul>
          <li>
            <a href={`#${sectionIds.problem}`} onClick={(e) => handleAnchorNavigation(e, sectionIds.problem)}>
              {t("problem")}
            </a>
          </li>
          <li>
            <a href={`#${sectionIds.solution}`} onClick={(e) => handleAnchorNavigation(e, sectionIds.solution)}>
              {t("solution")}
            </a>
          </li>
          <li>
            <a href={`#${sectionIds.demo}`} onClick={(e) => handleAnchorNavigation(e, sectionIds.demo)}>
              {t("demo")}
            </a>
          </li>
          <li>
            <a href={`#${sectionIds.pricing}`} onClick={(e) => handleAnchorNavigation(e, sectionIds.pricing)}>
              {t("pricing")}
            </a>
          </li>
          <li>
            <a href={`#${sectionIds.faq}`} onClick={(e) => handleAnchorNavigation(e, sectionIds.faq)}>
              {t("faq")}
            </a>
          </li>
          <li>
            <a href="https://wa.me/5513996020483" target="_blank" rel="noopener noreferrer">
              {t("cta")}
            </a>
          </li>
          <li>
            <ToggleThemeButton />
          </li>
          <li>
            <LanguageSelector>
              <LanguageButton $active={language === "pt-BR"} onClick={() => setLanguage("pt-BR")}>
                <img src="https://flagcdn.com/w40/br.png" alt="Português" />
              </LanguageButton>
              <LanguageButton $active={language === "en"} onClick={() => setLanguage("en")}>
                <img src="https://flagcdn.com/w40/us.png" alt="English" />
              </LanguageButton>
            </LanguageSelector>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};
