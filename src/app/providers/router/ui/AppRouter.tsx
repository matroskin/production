import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

function AppRouter() {
  return (
    <Routes>
      { Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(
            <div className='page-content'>
              <Suspense fallback={<PageLoader />}>
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
