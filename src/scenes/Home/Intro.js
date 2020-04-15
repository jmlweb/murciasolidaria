import React, { Suspense, lazy, memo } from 'react';
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/core';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FiHeart, FiTruck } from 'react-icons/fi';
import PT from 'prop-types';
import { useToggler } from 'reactponsive';

import { Container } from '../../components';
import { ROUTES } from '../../constants';

const fillProps = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const IntroImage = lazy(() => import('./IntroImage'));

const Intro = () => {
  const isTablet = useToggler('md');
  return (
    <Container>
      <Box position="relative" maxWidth="100%">
        <Suspense fallback={null}>
          <IntroImage />
        </Suspense>
        <Box position="absolute" {...fillProps} bg="teal.900" opacity={0.8} />
        <Flex
          position="relative"
          {...fillProps}
          justifyContent="center"
          alignItems="center"
          color="white"
        >
          <Box p={6} py={[6, 8, '80px']} textAlign="center">
            <Heading as="h2" mb={2}>
              El COVID-19 lo paramos entre todos
            </Heading>
            <Text fontSize="2xl" mb={2}>
              Queremos que nuestros héroes sin capa puedan luchar contra el
              Coronavirus con las medidas de protección que se merecen.{' '}
            </Text>
            <Text fontSize="2xl" mb={6}>
              Te ofrecemos pantallas protectoras GRATIS para desempeñar tu
              trabajo con seguridad.{' '}
            </Text>
            <Stack isInline={isTablet} justifyContent="center">
              <Button
                size="lg"
                as={ReactRouterLink}
                to={ROUTES.requestMaterial}
                variantColor="teal"
                overflow="hidden"
              >
                <Box as={FiTruck} display="inline-block" mr={1} />
                Solicitar pantallas
              </Button>
              <Button
                size="lg"
                as={ReactRouterLink}
                to={ROUTES.donations}
                variantColor="red"
              >
                <Box as={FiHeart} display="inline-block" mr={1} />
                Donaciones
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

Intro.propTypes = {
  onClick: PT.func.isRequired,
};

export default memo(Intro);
