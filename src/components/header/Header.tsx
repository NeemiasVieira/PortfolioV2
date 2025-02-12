'use client';
import Link from 'next/link';
import { CloseMenuButton, HeaderStyle, MobileHeaderStyle, MobileMenu, ToggleMenuButton } from './style';
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
  faXmarkSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export const Header = () => {
  const router = useRouter();
  const { isMobile, isTablet } = useBreakpoints();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigation = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    closeMenu();

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
          <FontAwesomeIcon icon={faBars} color="#fff" />
        </ToggleMenuButton>

        <MobileMenu $isMenuOpen={isMenuOpen}>
          <CloseMenuButton onClick={toggleMenu}>
            <FontAwesomeIcon icon={faXmarkSquare} color="#fff" />
          </CloseMenuButton>
          <nav>
            <ul>
              <li onClick={(e) => handleNavigation(e, `#${HomePageLocalRoutes.TOP}`)}>
                <FontAwesomeIcon icon={faHome} />
                <a href={`#${HomePageLocalRoutes.TOP}`}>Início</a>
              </li>
              <li onClick={(e) => handleNavigation(e, `#${HomePageLocalRoutes.TECNOLOGIES}`)}>
                <FontAwesomeIcon icon={faCode} />
                <a href={`#${HomePageLocalRoutes.TECNOLOGIES}`}>Tecnologias</a>
              </li>
              <li onClick={(e) => handleNavigation(e, `#${HomePageLocalRoutes.COMPETENCIES}`)}>
                <FontAwesomeIcon icon={faPeopleGroup} />
                <a href={`#${HomePageLocalRoutes.COMPETENCIES}`}>Competências</a>
              </li>
              <li onClick={(e) => handleNavigation(e, `#${HomePageLocalRoutes.PROJECTS}`)}>
                <FontAwesomeIcon icon={faLaptopCode} />
                <a href={`#${HomePageLocalRoutes.PROJECTS}`}>Projetos</a>
              </li>
              <li onClick={(e) => handleNavigation(e, '/contact')}>
                {' '}
                <FontAwesomeIcon icon={faPhone} />
                Contatos
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
              Tecnologias
            </a>
          </li>
          <li>
            <a
              href={`#${HomePageLocalRoutes.COMPETENCIES}`}
              onClick={(e) => handleNavigation(e, `#${HomePageLocalRoutes.COMPETENCIES}`)}
            >
              Competências
            </a>
          </li>
          <li>
            <a
              href={`#${HomePageLocalRoutes.PROJECTS}`}
              onClick={(e) => handleNavigation(e, `#${HomePageLocalRoutes.PROJECTS}`)}
            >
              Projetos
            </a>
          </li>
          <li>
            <Link href="/contact">Contatos</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};
