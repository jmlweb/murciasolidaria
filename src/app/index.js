import React, { Suspense, lazy } from 'react';

import StylesProvider from './StylesProvider';
import FirebaseProvider from './FirebaseProvider';

const Home = lazy(() => import('../scenes/Home'));

const App = () => (
  <StylesProvider>
    <FirebaseProvider>
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    </FirebaseProvider>
  </StylesProvider>
);

export default App;
