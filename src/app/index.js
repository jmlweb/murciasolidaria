import React, { Suspense, lazy } from 'react';

import FirebaseProvider from './FirebaseProvider';
import ResponsiveProvider from './ResponsiveProvider';
import StylesProvider from './StylesProvider';

const Home = lazy(() => import('../scenes/Home'));

const App = () => (
  <StylesProvider>
    <ResponsiveProvider>
      <FirebaseProvider>
        <Suspense fallback={null}>
          <Home />
        </Suspense>
      </FirebaseProvider>
    </ResponsiveProvider>
  </StylesProvider>
);

export default App;
