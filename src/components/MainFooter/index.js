import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/core';

import Container from '../Container';
import Logo from '../Logo';

const MainFooter = () => (
  <Container>
    <Flex
      as="footer"
      my={8}
      borderTop="1px solid"
      borderColor="gray.200"
      pt={8}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Link href="/">
          <Logo size="sm" />
        </Link>
      </Box>
    </Flex>
  </Container>
);

export default MainFooter;
