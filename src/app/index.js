import React, { useEffect } from 'react';

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
          <Scenes />
        </FirebaseProvider>
      </ResponsiveProvider>
    </StylesProvider>
  );
};

export default App;
