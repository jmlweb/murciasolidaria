import React, { memo } from 'react';
import { Box, Button, Flex } from '@chakra-ui/core';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FiAlertOctagon } from 'react-icons/fi';

const Buttons = () => (
  <Flex justifyContent="center" mb={8}>
    <Button
      size="lg"
      as={ReactRouterLink}
      to="/request-material"
      variantColor="teal"
    >
      <Box as={FiAlertOctagon} display="inline-block" mr={1} />
      Solicitar pantallas
    </Button>
  </Flex>
);

export default memo(Buttons);
