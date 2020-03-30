import React from 'react';
import { Box } from '@chakra-ui/core';

import logoSrc from './logo.svg';

const Logo = () => (
  <Box as="img" width={['210px', '210px', '300px']} src={logoSrc} />
);

export default Logo;
