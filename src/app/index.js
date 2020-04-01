import React, { useEffect } from 'react';

import FirebaseProvider from './FirebaseProvider';
import ResponsiveProvider from './ResponsiveProvider';
import StylesProvider from './StylesProvider';
import Scenes from '../scenes';
import setYupLocale from './setYupLocale';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  useEffect(() => {
    setYupLocale();
  }, []);
  return (
    <StylesProvider>
      <ErrorBoundary>
        <ResponsiveProvider>
          <FirebaseProvider>
            <Scenes />
          </FirebaseProvider>
        </ResponsiveProvider>
      </ErrorBoundary>
    </StylesProvider>
  );
};

export default App;
