import React, { Suspense, lazy, memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Flex, Spinner } from '@chakra-ui/core';
import { preloadAuth, preloadFirestore } from 'reactfire';

const About = lazy(() => import('./About'));
const Dashboard = lazy(() => import('./Dashboard'));
const Donations = lazy(() => import('./Donations'));
const Home = lazy(() => import('./Home'));
const RequestMaterial = lazy(() => import('./RequestMaterial'));

const Scenes = () => {
  preloadAuth();
  preloadFirestore({
    setup: (firestore) =>
      firestore().enablePersistence({
        synchronizeTabs: true,
      }),
  });
  return (
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
      <Router>
        <Switch>
          <Route path="/que-es" component={About} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/donaciones" component={Donations} />
          <Route path="/solicitar-material" component={RequestMaterial} />
          <Route component={Home} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default memo(Scenes);
