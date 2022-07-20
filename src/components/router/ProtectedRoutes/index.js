import React, { memo, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';

// import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

const ProtectedRoutes = ({ routes }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {routes.map(({ path, component, exact, requiredAuthen }) => (
        <PublicRoute
          key={path}
          exact={exact}
          requiredAuthen={requiredAuthen}
          path={path}
          component={component}
        />
      ))}
    </Switch>
  </Suspense>
);

ProtectedRoutes.propTypes = {
  routes: PropTypes.array,
  // isAuthenticated: PropTypes.bool,
};

ProtectedRoutes.defaultProps = {
  routes: [],
  // isAuthenticated: false,
};

export default memo(ProtectedRoutes);
