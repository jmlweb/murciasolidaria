import React from 'react';
import { Flex } from '@chakra-ui/core';
import { AuthCheck } from 'reactfire';

import Container from '../Container';
import Logo from '../Logo';
import GoogleSignIn from '../GoogleSignin';

const MainHeader = () => (
  <Container>
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      height="60px"
    >
      <div>
        <Logo />
      </div>
      <div>
        <AuthCheck fallback={<GoogleSignIn />}>
          <div>U</div>
        </AuthCheck>
      </div>
    </Flex>
  </Container>
);

export default MainHeader;
