import React, { useEffect, Suspense } from 'react';
import { Flex, Spinner } from '@chakra-ui/core';

import FirebaseProvider from './FirebaseProvider';
import ResponsiveProvider from './ResponsiveProvider';
import StylesProvider from './StylesProvider';
import Scenes from '../scenes';
import setYupLocale from './setYupLocale';

const App = () => {
  useEffect(() => {
    setYupLocale();
  }, []);
  return (
    <StylesProvider>
      <ResponsiveProvider>
        <FirebaseProvider>
          <Suspense
            fallback={
              <Flex justifyContent="center" alignItems="center" height="100vh">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="cyan.200"
                  color="cyan.500"
                  size="xl"
                />
              </Flex>
            }
          >
            <Scenes />
          </Suspense>
        </FirebaseProvider>
      </ResponsiveProvider>
    </StylesProvider>
  );
};

export default App;
