import React, { lazy, Suspense } from 'react';
import { AuthCheck } from 'reactfire';

const AnonymMenu = lazy(() => import('./AnonymMenu'));
const LoggedMenu = lazy(() => import('./LoggedMenu'));

const MainMenu = () => (
  <Suspense fallback="null">
    <AuthCheck fallback={<AnonymMenu />}>
      <LoggedMenu />
    </AuthCheck>
  </Suspense>
);

export default MainMenu;
