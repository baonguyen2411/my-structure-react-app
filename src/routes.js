import { lazy } from 'react';

const routes = [
  {
    path: '/',
    component: lazy(() => import('./pages/LandingPage')),
    exact: true,
    requiredAuthen: true,
  },
  {
    path: '/auth',
    component: lazy(() => import('./pages/AuthPage')),
    exact: true,
  },
  {
    path: '/setting',
    component: lazy(() => import('./pages/SettingPage')),
    exact: false,
    requiredAuthen: true,
  },
  {
    path: '/file-manager',
    component: lazy(() => import('./pages/FileManager')),
    exact: false,
    requiredAuthen: true,
  },
  {
    path: '/user',
    component: lazy(() => import('./pages/UserPage')),
    exact: false,
  },
];

export default routes;
