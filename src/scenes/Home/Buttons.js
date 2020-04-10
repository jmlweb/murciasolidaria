import React, { memo } from 'react';
import { Button, Stack } from '@chakra-ui/core';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FiHeart, FiTruck } from 'react-icons/fi';
import { useToggler } from 'reactponsive';

import { ROUTES } from '../../constants';

const Buttons = () => {
  const isTablet = useToggler('md');
  return (
    <Stack
      isInline={isTablet}
      justifyContent="center"
      mt={4}
      mb={10}
      spacing={2}
    >
      <Button
        size="lg"
        as={ReactRouterLink}
        to={ROUTES.requestMaterial}
        variantColor="teal"
        leftIcon={FiTruck}
      >
        Solicitar pantallas
      </Button>
      <Button
        size="lg"
        as={ReactRouterLink}
        to={ROUTES.donations}
        variantColor="red"
        leftIcon={FiHeart}
      >
        Donaciones
      </Button>
    </Stack>
  );
};

export default memo(Buttons);
