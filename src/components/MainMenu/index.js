import React, { lazy, Suspense } from 'react';
import { AuthCheck } from 'reactfire';
import { Avatar } from '@chakra-ui/core';

const AnonymMenu = lazy(() => import('./AnonymMenu'));
const LoggedMenu = lazy(() => import('./LoggedMenu'));

const MainMenu = () => (
  <Suspense fallback={<Avatar size="sm" />}>
    <AuthCheck fallback={<AnonymMenu />}>
      <LoggedMenu />
    </AuthCheck>
  </Suspense>
);

export default MainMenu;
