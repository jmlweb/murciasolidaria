import React from 'react';
import { Flex } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import Container from '../Container';
import Logo from '../Logo';
import MainMenu from '../MainMenu';

import { ROUTES } from '../../constants';

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
      <Link to={ROUTES.home}>
        <Logo />
      </Link>
      <div>
        <MainMenu />
      </div>
    </Flex>
  </Container>
);

export default MainHeader;
