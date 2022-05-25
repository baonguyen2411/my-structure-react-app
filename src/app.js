import React, { memo, useState, useEffect } from 'react';

import routes from './routes';

import Sidebar from 'components/layout/Sidebar';
import ProtectedRoutes from 'components/router/ProtectedRoutes';

import './styles.scss';

const App = () => {
  const [isActivated, setIsActivated] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAuthenticated(true);
    }, [5000]);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <>
      <Sidebar
        isActivated={isActivated}
        onToggle={() => setIsActivated(!isActivated)}
      />
      <main className={`main ${isActivated && 'active'} bg-red-800`}>
        <h2 className="text-2xl text-red-700">ABC</h2>
        <ProtectedRoutes routes={routes} isAuthenticated={isAuthenticated} />
      </main>
    </>
  );
};

export default memo(App);
