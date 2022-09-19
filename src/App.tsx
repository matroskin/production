import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import './styles/index.scss';

const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О компании</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageAsync />}></Route>
          <Route path={'/about'} element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
      <button onClick={toogleTheme}>Theme</button>
    </div>
  );
};

export default App;
