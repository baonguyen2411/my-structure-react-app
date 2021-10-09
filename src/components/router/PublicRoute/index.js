import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const PublicRoute = ({ path, component, exact }) => {
  return <Route path={path} component={component} exact={exact} />;
};

PublicRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.elementType.isRequired,
  ]),
  exact: PropTypes.bool,
};

PublicRoute.defaultProps = {
  exact: false,
};

export default memo(PublicRoute);
