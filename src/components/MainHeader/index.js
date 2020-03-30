import React, { lazy } from 'react';
import { Flex } from '@chakra-ui/core';
import { AuthCheck } from 'reactfire';
import { Link } from 'react-router-dom';

import Container from '../Container';
import Logo from '../Logo';

const GoogleSignin = lazy(() => import('../GoogleSignin'));
const UserMenu = lazy(() => import('../UserMenu'));

const MainHeader = () => (
  <Container>
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      height={['60px', '80px', '120px']}
      width="100%"
      overflow="hidden"
    >
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <AuthCheck fallback={<GoogleSignin />}>
          <UserMenu />
        </AuthCheck>
      </div>
    </Flex>
  </Container>
);

export default MainHeader;
