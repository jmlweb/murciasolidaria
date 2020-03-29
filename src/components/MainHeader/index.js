import React from 'react';
import { Flex } from '@chakra-ui/core';

import Logo from '../Logo';

const MainHeader = () => (
  <Flex
    as="header"
    justifyContent="space-between"
    alignItems="center"
    px={3}
    height="60px"
  >
    <div>
      <Logo />
    </div>
    <div>Nav</div>
  </Flex>
);

export default MainHeader;
