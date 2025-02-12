'use client';
import Link from 'next/link';
import { HeaderStyle } from './style';
import { HomePageLocalRoutes } from './Contract';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent, route: string) => {
    if (window.location.pathname !== '/') {
      e.preventDefault();

      if (route.startsWith('#')) {
        router.push('/');
        setTimeout(() => {
          window.location.href = route;
        }, 100);
      } else {
        window.location.href = route;
      }
    }
  };

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
