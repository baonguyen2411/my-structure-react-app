import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PublicRoute.propTypes = {
  children: PropTypes.any,
  isAuthenticated: PropTypes.bool,
};

PublicRoute.defaultProps = {
  isAuthenticated: false,
};

export default memo(PublicRoute);
