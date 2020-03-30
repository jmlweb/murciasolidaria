import React, { Suspense, lazy } from 'react';
import { Box, Button, Flex, Heading, Text, Stack } from '@chakra-ui/core';
import { Link as ReactRouterLink, useHistory } from 'react-router-dom';
import { FiAlertOctagon } from 'react-icons/fi';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AuthCheck } from 'reactfire';

import { CommonLink, Container, MainLayout } from '../../components';
import { useGoogleSignin } from '../../hooks';

const fillProps = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const IntroImage = lazy(() => import('./IntroImage'));

const Home = () => {
  const history = useHistory();
  const onClick = useGoogleSignin(() => history.push('/request-material'));
  return (
    <MainLayout>
      <Container>
        <Box position="relative">
          <Suspense fallback={null}>
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
            <Box maxWidth="containers.lg" p={6} textAlign="center">
              <Heading as="h2" mb={2}>
                El COVID-19 lo paramos entre todos
              </Heading>
              <Text fontSize="2xl" mb={6}>
                Queremos que nuestros héroes sin capa puedan luchar contra el
                Coronavirus con las medidas de protección que se merecen.{' '}
              </Text>
              <Flex justifyContent="center">
                <AuthCheck
                  fallback={
                    <Button size="lg" onClick={onClick} variantColor="red">
                      <Box as={AiOutlineGoogle} display="inline-block" mr={1} />
                      Accede para solicitar material
                    </Button>
                  }
                >
                  <Button
                    size="lg"
                    as={ReactRouterLink}
                    to="/request-material"
                    variantColor="teal"
                  >
                    <Box as={FiAlertOctagon} display="inline-block" mr={1} />
                    Solicitar material
                  </Button>
                </AuthCheck>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Container>
      <Container maxWidth="4xl">
        <Stack my={8} spacing={6}>
          <Text fontSize={['lg', 'lg', 'xl']}>
            Estas últimas semanas estamos siendo testigos de uno de los peores
            episodios a los que se ha enfrentado la humanidad,{' '}
            <strong>la pandemia del Coronavirus.</strong>
          </Text>
          <Text fontSize={['lg', 'lg', 'xl']}>
            Lo que comenzó como una simple gripe (o eso creíamos) ha derivado en
            un caos mundial consecuencia de este virus tan contagioso que,
            desgraciadamente, ya se ha cobrado muchas vidas a su paso. Como si
            de una película de ciencia ficción se tratase, las ciudades se han
            quedado desiertas pues todos los países han tenido que establecer
            medidas cada vez más restrictivas para intentar frenar esta locura.
          </Text>
          <Text fontSize={['lg', 'lg', 'xl']}>
            Con la iniciativa de{' '}
            <CommonLink href="http://murciasolidaria.com" isExternal={false}>
              murciasolidaria.com
            </CommonLink>{' '}
            pretendemos ayudar a todas aquellas personas que cada día se juegan
            la vida y las de su entorno para luchar contra esta pandemia.
          </Text>
          <Stack spacing={2}>
            <Heading as="h3" size="lg" fontSize="24px">
              ¿En qué consiste la iniciativa murciasolidaria.com?
            </Heading>
            <Text fontSize={['lg', 'lg', 'xl']}>
              Estamos fabricando Equipos de Protección Individual (EPIs) y
              robots de desinfección. Para ello, la empresa de robótica{' '}
              <CommonLink href="http://nido.ai">NIDO Robotics</CommonLink> se ha
              asociado con el{' '}
              <CommonLink href="https://laboratoriodeartesaniadigital.com/">
                Laboratorio de Artesanía Digital de San Pedro del Pinatar
              </CommonLink>
              , Makers de Alicante y el grupo de CoronaMakers de Murcia para
              poder producir el mayor número de EPIs de la forma más eficiente y
              rápida posible. El objetivo es producir entre 500 y 2000 EPIs al
              día que se entregarán a los servicios de salud murcianos y
              alicantinos. Además de a la Guardia Civil, Policías Locales y
              Nacionales, etc.
            </Text>
          </Stack>
          <Text fontSize={['lg', 'lg', 'xl']}>
            Podéis seguir la evolución de esta iniciativa a través de las redes
            sociales de NIDO Robotics. Entre todos conseguiremos ganarle la
            batalla al Coronavirus.
          </Text>
        </Stack>
      </Container>
    </MainLayout>
  );
};

export default Home;
