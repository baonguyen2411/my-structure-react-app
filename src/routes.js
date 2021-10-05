import { lazy } from 'react';

const routes = [
  {
    path: '/',
    component: lazy(() => import('./pages/LandingPage')),
    exact: true,
  },
  {
    path: '/setting',
    component: lazy(() => import('./pages/SettingPage')),
    exact: false,
  },
  {
    path: '/file-manager',
    component: lazy(() => import('./pages/FileManager')),
    exact: false,
  },
  {
    path: '/user',
    component: lazy(() => import('./pages/UserPage')),
    exact: false,
  },
];

export default routes;
