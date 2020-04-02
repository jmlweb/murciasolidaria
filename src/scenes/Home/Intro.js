import React, { Suspense, lazy, memo } from 'react';
import { Box, Button, Flex, Heading, Text, useTheme } from '@chakra-ui/core';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FiTruck } from 'react-icons/fi';
import PT from 'prop-types';

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
  const theme = useTheme();
  return (
    <Container>
      <Box position="relative" maxWidth="100%">
        <Suspense fallback={<Box height={['auto', 'auto', '656px']} />}>
          <IntroImage />
        </Suspense>
        <Box position="absolute" {...fillProps} bg="teal.900" opacity={0.8} />
        <Flex
          position={['relative', 'relative', 'absolute']}
          {...fillProps}
          justifyContent="center"
          alignItems="center"
          color="white"
        >
          <Box
            maxWidth={[`calc(100vw - ${theme.space[6]})`, 'containers.lg']}
            p={6}
            textAlign="center"
          >
            <Heading as="h2" mb={2}>
              El COVID-19 lo paramos entre todos
            </Heading>
            <Text fontSize="2xl" mb={2}>
              Queremos que nuestros héroes sin capa puedan luchar contra el
              Coronavirus con las medidas de protección que se merecen.{' '}
            </Text>
            <Text fontSize="2xl" mb={6}>
              Te ofrecemos PANTALLAS PROTECTORAS para desempeñar tu trabajo con
              seguridad.{' '}
            </Text>
            <Flex justifyContent="center">
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
