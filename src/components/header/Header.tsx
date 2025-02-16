'use client';
import Link from 'next/link';
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
} from './style';
import { HomePageLocalRoutes } from './Contract';
import { useRouter } from 'next/navigation';
import useBreakpoints from '@/hooks/useBreakpoints';
import {
  faBars,
  faCode,
  faHome,
  faLaptopCode,
  faPeopleGroup,
  faPhone,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLanguageStore } from '@/stores/useLanguageStore';
import { ToggleThemeButton } from '../buttons/toggle-theme';
import { useTheme } from '@/stores/useThemesStore';

export const Header = () => {
  //hooks
  const t = useTranslations();
  const router = useRouter();
  const { isMobile, isTablet } = useBreakpoints();
  const { language, setLanguage } = useLanguageStore();
  const { theme } = useTheme();

  //state
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  //functions
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigation = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    closeMenu();

    if (typeof window === 'undefined') return;

    const isHashRoute = route.startsWith('#');
    const isHomePage = window.location.pathname === '/';
    const HEADER_HEIGHT = 80;

    const scrollToElement = () => {
      const element = document.querySelector(route);
      if (element) {
        const offset = element.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    };

    if (isHashRoute) {
      if (isHomePage) {
        scrollToElement();
      } else {
        router.push('/');
        setTimeout(scrollToElement, 500);
      }
    } else {
      router.push(route);
    }
  };

  if (isMobile || isTablet) {
    return (
      <MobileHeaderStyle>
        <Link href={`#${HomePageLocalRoutes.TOP}`} onClick={(e) => handleNavigation(e, `#${HomePageLocalRoutes.TOP}`)}>
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
                <LanguageButton $active={language === 'pt-BR'} onClick={() => setLanguage('pt-BR')}>
                  <img src="https://flagcdn.com/w40/br.png" alt="Português" />
                </LanguageButton>
                <LanguageButton $active={language === 'en'} onClick={() => setLanguage('en')}>
                  <img src="https://flagcdn.com/w40/us.png" alt="English" />
                </LanguageButton>
              </MobileLanguageSelector>
            </MobileApplicationActions>
          </MobileTopMenuActions>

          <nav>
            <ul>
              <li onClick={(e) => handleNavigation(e, `#${HomePageLocalRoutes.TOP}`)}>
                <FontAwesomeIcon icon={faHome} />
                <a href={`#${HomePageLocalRoutes.TOP}`}>{t('header.home')}</a>
              </li>
              <li onClick={(e) => handleNavigation(e, `#${HomePageLocalRoutes.TECNOLOGIES}`)}>
                <FontAwesomeIcon icon={faCode} />
                <a href={`#${HomePageLocalRoutes.TECNOLOGIES}`}>{t('header.tecnologies')}</a>
              </li>
              <li onClick={(e) => handleNavigation(e, `#${HomePageLocalRoutes.SKILLS}`)}>
                <FontAwesomeIcon icon={faPeopleGroup} />
                <a href={`#${HomePageLocalRoutes.SKILLS}`}>{t('header.skills')}</a>
              </li>
              <li onClick={(e) => handleNavigation(e, `#${HomePageLocalRoutes.PROJECTS}`)}>
                <FontAwesomeIcon icon={faLaptopCode} />
                <a href={`#${HomePageLocalRoutes.PROJECTS}`}>{t('header.projects')}</a>
              </li>
              <li onClick={(e) => handleNavigation(e, '/contact')}>
                <FontAwesomeIcon icon={faPhone} />
                {t('header.contacts')}
              </li>
            </ul>
          </nav>
        </MobileMenu>
      </MobileHeaderStyle>
    );
  }

  return (
    <HeaderStyle>
      <Link href={`#${HomePageLocalRoutes.TOP}`} onClick={(e) => handleNavigation(e, `#${HomePageLocalRoutes.TOP}`)}>
        <h1>
          Dev<span>NeemiasVieira</span>
        </h1>
      </Link>
      <nav>
        <ul>
          <li>
            <a
              href={`#${HomePageLocalRoutes.TECNOLOGIES}`}
              onClick={(e) => handleNavigation(e, `#${HomePageLocalRoutes.TECNOLOGIES}`)}
            >
              {t('header.tecnologies')}
            </a>
          </li>
          <li>
            <a
              href={`#${HomePageLocalRoutes.SKILLS}`}
              onClick={(e) => handleNavigation(e, `#${HomePageLocalRoutes.SKILLS}`)}
            >
              {t('header.skills')}
            </a>
          </li>
          <li>
            <a
              href={`#${HomePageLocalRoutes.PROJECTS}`}
              onClick={(e) => handleNavigation(e, `#${HomePageLocalRoutes.PROJECTS}`)}
            >
              {t('header.projects')}
            </a>
          </li>
          <li>
            <Link href="/contact"> {t('header.contacts')}</Link>
          </li>
          <li>
            <ToggleThemeButton />
          </li>
          <li>
            <LanguageSelector>
              <LanguageButton $active={language === 'pt-BR'} onClick={() => setLanguage('pt-BR')}>
                <img src="https://flagcdn.com/w40/br.png" alt="Português" />
              </LanguageButton>
              <LanguageButton $active={language === 'en'} onClick={() => setLanguage('en')}>
                <img src="https://flagcdn.com/w40/us.png" alt="English" />
              </LanguageButton>
            </LanguageSelector>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};
