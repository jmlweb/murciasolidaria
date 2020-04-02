import React, { memo } from 'react';
import { Box, Button, Flex } from '@chakra-ui/core';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FiTruck } from 'react-icons/fi';

import { ROUTES } from '../../constants';

const Buttons = () => (
  <Flex justifyContent="center" my={8}>
    <Button
      size="lg"
      as={ReactRouterLink}
      to={ROUTES.requestMaterial}
      variantColor="teal"
    >
      <Box as={FiTruck} display="inline-block" mr={1} />
      Solicitar pantallas
    </Button>
  </Flex>
);

export default memo(Buttons);
