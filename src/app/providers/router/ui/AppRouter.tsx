import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

function AppRouter() {
  return (
    <Routes>
      { Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(
            <div className='page-content'>
              <Suspense fallback={<div>Loading...</div>}>
                { element }
              </Suspense>
            </div>
          )}
        />
      )) }
    </Routes>
  );
}

export default AppRouter;
