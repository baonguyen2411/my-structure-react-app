import React, { memo, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';

// import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

const ProtectedRoutes = ({ routes }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map(route => {
          return <PublicRoute key={route?.path} {...route} />;
        })}
      </Switch>
    </Suspense>
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
