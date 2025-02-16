import styled from 'styled-components';

export const ToggleThemeButtonWrapper = styled.label<{ $scale: number }>`
  position: relative;
  display: inline-block;
  width: ${({ $scale }) => 60 * $scale}px;
  height: ${({ $scale }) => 34 * $scale}px;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.toggleBackground};
    transition: 500ms;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: ${({ $scale }) => 26 * $scale}px;
    width: ${({ $scale }) => 26 * $scale}px;
    left: ${({ $scale }) => 4 * $scale}px;
    bottom: ${({ $scale }) => 4 * $scale}px;
    background-color: ${({ theme }) => theme.colors.toggleCircle};
    transition: 500ms;
  }

  input:checked + .slider {
    background-color: ${({ theme }) => theme.colors.elementHover};
  }

  input:focus + .slider {
    box-shadow: 0 0 ${({ $scale }) => 1 * $scale}px ${({ theme }) => theme.colors.border};
  }

  input:checked + .slider:before {
    transform: translateX(${({ $scale }) => 26 * $scale}px);
  }

  .slider.round {
    border-radius: ${({ $scale }) => 34 * $scale}px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .icon {
    position: absolute;
    left: 14%;
    font-size: ${({ $scale }) => 1.2 * $scale}rem;
    color: #222;
    z-index: 1;
    transition: 500ms;
    opacity: 0;
  }

  .icon.visible {
    opacity: 1;
  }

  input:checked + .slider .icon {
    transform: translateX(${({ $scale }) => 28 * $scale}px);
  }
`;
