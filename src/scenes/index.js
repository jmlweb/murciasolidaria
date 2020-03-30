import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Flex, Spinner } from '@chakra-ui/core';

const Home = lazy(() => import('./Home'));
const RequestMaterial = lazy(() => import('./RequestMaterial'));

const Scenes = () => (
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
        <Route path="/request-material" component={RequestMaterial} />
        <Route component={Home} />
      </Switch>
    </Router>
  </Suspense>
);

export default Scenes;
