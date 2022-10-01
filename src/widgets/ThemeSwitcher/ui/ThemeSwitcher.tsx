import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-switcher-light.svg';
import DarkIcon from 'shared/assets/icons/theme-switcher-dark.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
};

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const { theme, toogleTheme } = useTheme();

  return (
    <button
      onClick={toogleTheme}
      className={classNames(cls.themeSwitcher, {}, [className])}
    >
      { theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon /> }
    </button>
  );
};
