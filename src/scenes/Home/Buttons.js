import React, { memo } from 'react';
import { Box, Button, Stack } from '@chakra-ui/core';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FiHeart, FiTruck } from 'react-icons/fi';

import { ROUTES } from '../../constants';

const Buttons = () => (
  <Stack isInline justifyContent="center" mt={4} mb={10} spacing={8}>
    <Button
      size="lg"
      as={ReactRouterLink}
      to={ROUTES.requestMaterial}
      variantColor="red"
    >
      <Box as={FiHeart} display="inline-block" mr={1} />
      Donaciones
    </Button>
    <Button
      size="lg"
      as={ReactRouterLink}
      to={ROUTES.requestMaterial}
      variantColor="teal"
    >
      <Box as={FiTruck} display="inline-block" mr={1} />
      Solicitar pantallas
    </Button>
  </Stack>
);

export default memo(Buttons);
