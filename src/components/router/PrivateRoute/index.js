import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({
  path,
  component: Component,
  exact,
  isAuthenticated,
}) => (
  <Route
    path={path}
    exact={exact}
    render={({ location }) => isAuthenticated ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: '/auth',
            state: { from: location },
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType])
    .isRequired,
  exact: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  exact: false,
  isAuthenticated: false,
};

export default memo(PrivateRoute);
