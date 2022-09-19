import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage';
import { MainPage } from '../pages/MainPage';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';

const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О компании</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage />}></Route>
          <Route path={'/about'} element={<AboutPage />}></Route>
        </Routes>
      </Suspense>
      <button onClick={toogleTheme}>Theme</button>
    </div>
  );
};

export default App;
