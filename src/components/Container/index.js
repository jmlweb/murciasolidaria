import React from 'react';
import { Box } from '@chakra-ui/core';

const Container = (props) => (
  <Box
    maxWidth="containers.xl"
    {...props}
    px={[3, 4, 6]}
    width="100%"
    margin="0 auto"
  />
);

export default Container;
