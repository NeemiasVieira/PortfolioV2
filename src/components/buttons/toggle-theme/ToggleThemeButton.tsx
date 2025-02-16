'use client';

import { useTheme } from '@/stores/useThemesStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ToggleThemeButtonWrapper } from './style';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  scale?: number;
};

export const ToggleThemeButton: React.FC<Props> = ({ scale }) => {
  const { selectedTheme, toggleTheme } = useTheme();
  const checked = selectedTheme === 'dark';

  return (
    <ToggleThemeButtonWrapper $scale={scale ?? 0.75}>
      <input type="checkbox" onChange={toggleTheme} checked={checked} />
      <span className="slider round">
        <span className={`icon ${checked ? 'visible' : ''}`}>
          <FontAwesomeIcon icon={faMoon} />
        </span>

        <span className={`icon ${checked ? '' : 'visible'}`}>
          <FontAwesomeIcon icon={faSun} />
        </span>
      </span>
    </ToggleThemeButtonWrapper>
  );
};
