import React, { Children } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import PropTypes from 'prop-types';

const config = {
  appId: process.env.REACT_APP_APP_ID,
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const FirebaseProvider = ({ children }) => (
  <FirebaseAppProvider firebaseConfig={config}>
    {Children.only(children)}
  </FirebaseAppProvider>
);

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FirebaseProvider;
