import { Route, Routes } from 'react-router-dom';

import routes from '..';
import { PrivateRoute } from '../PrivateRoute';

function Pages() {

  const isClientSelected = !!sessionStorage.getItem('current_client_id');

  const routesList = Object.values(routes)

  const menuRoutes = isClientSelected ? routesList.filter(({isIntro}) => !isIntro) : routesList.filter(({ isCommon }) => isCommon);


  return (
    <Routes>
      {menuRoutes.map(({ path, component: Component, isPrivate }) => {
        return (
          <Route
            key={path}
            path={path}
            element={
              <PrivateRoute  isPrivate={isPrivate}>
                <Component />
              </PrivateRoute>
            }
          />
        );
      })}
    </Routes>
  );
}

export default Pages;
