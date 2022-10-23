import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import LightIcon from 'shared/assets/icons/theme-switcher-light.svg';
import DarkIcon from 'shared/assets/icons/theme-switcher-dark.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toogleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toogleTheme}
    >
      { theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon /> }
    </Button>
  );
}
