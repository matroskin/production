import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';

const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О компании</Link>
      <AppRouter />
      <button onClick={toogleTheme}>Theme</button>
    </div>
  );
};

export default App;
