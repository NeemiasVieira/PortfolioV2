'use client';

import { ToggleButtonWrapper } from './style';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  scale?: number;
};

export const ToggleButton: React.FC<Props> = ({ onChange, checked, scale }) => {
  return (
    <ToggleButtonWrapper $scale={scale ?? 0.75}>
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className="slider round"></span>
    </ToggleButtonWrapper>
  );
};
