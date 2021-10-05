import React, { memo, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

const ProtectedRoutes = ({ routes, isAuthenticated }) => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        {routes.map(({ component: Component, path, exact, isPrivate }) => {
          if (isPrivate) {
            return (
              <PrivateRoute
                key={path}
                path={path}
                exact={exact}
                isAuthenticated={isAuthenticated}
              >
                <Component />
              </PrivateRoute>
            );
          }

          return (
            <PublicRoute
              key={path}
              path={path}
              exact={exact}
              isAuthenticated={!isAuthenticated}
            >
              <Component />
            </PublicRoute>
          );
        })}
      </Suspense>
    </Switch>
  );
};

ProtectedRoutes.propTypes = {
  routes: PropTypes.array,
  isAuthenticated: PropTypes.bool,
};

ProtectedRoutes.defaultProps = {
  routes: [],
  isAuthenticated: false,
};

export default memo(ProtectedRoutes);
