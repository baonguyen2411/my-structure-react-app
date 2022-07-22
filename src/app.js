import React, { memo } from 'react';

import Sidebar from 'components/layout/Sidebar';

import './styles.scss';

const App = () => (
  <div className="flex">
    <Sidebar />
    <main className="p-7">
      <h1 className="text-2xl">Home Page</h1>
    </main>
  </div>
);

export default memo(App);
