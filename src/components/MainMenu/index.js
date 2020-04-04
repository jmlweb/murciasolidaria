import React, { lazy, Suspense } from 'react';
import { AuthCheck } from 'reactfire';
import { Spinner } from '@chakra-ui/core';

const AnonymMenu = lazy(() => import('./AnonymMenu'));
const LoggedMenu = lazy(() => import('./LoggedMenu'));

const MainMenu = () => (
  <Suspense
    fallback={
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="teal.200"
        color="teal.500"
        size="md"
      />
    }
  >
    <AuthCheck fallback={<AnonymMenu />}>
      <LoggedMenu />
    </AuthCheck>
  </Suspense>
);

export default MainMenu;
