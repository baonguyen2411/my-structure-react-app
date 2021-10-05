import React, { memo, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureAppStore from './store/configureAppStore';
import routes from './routes';

import Sidebar from './components/layout/Sidebar';
import ProtectedRoutes from './components/router/ProtectedRoutes';

import './styles.scss';

const store = configureAppStore();

const App = () => {
  const [isActivated, setIsActivated] = useState(true);

  return (
    <Provider store={store}>
      <Router>
        <Sidebar
          isActivated={isActivated}
          onToggle={() => setIsActivated(!isActivated)}
        />
        <main className={`main ${isActivated && 'active'}`}>
          <ProtectedRoutes routes={routes} isAuthenticated />
        </main>
      </Router>
    </Provider>
  );
};

export default memo(App);
