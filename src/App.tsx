import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import './styles/index.scss';

const App = () => {
  return (
    <div className='app'>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О компании</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageAsync />}></Route>
          <Route path={'/about'} element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
