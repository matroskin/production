import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './index.scss';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';

const App = () => {
  return (
    <div className='app'>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О компании</Link>
      <Routes>
        <Route path={'/'} element={<MainPage />}></Route>
        <Route path={'/about'} element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
