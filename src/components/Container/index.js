import React from 'react';
import { Box } from '@chakra-ui/core';

const Container = (props) => (
  <Box
    {...props}
    px={[3, 3, 4]}
    width="100%"
    maxWidth="containers.xl"
    margin="0 auto"
  />
);

export default Container;
