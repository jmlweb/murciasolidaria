import React from 'react';
import { Heading, Text, Stack } from '@chakra-ui/core';

import { CommonLink, Container, MainLayout } from '../../components';
import Buttons from './Buttons';

import { useLogPage } from '../../hooks';

const About = () => {
  useLogPage();
  return (
    <MainLayout>
      <Container maxWidth="4xl">
        <Stack my={[8, 10]} spacing={6}>
          <Heading as="h1" size="lg" fontSize={['24px', '32px']} mb={2}>
            ¿Qué es la iniciativa Murcia Solidaria?
          </Heading>
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
      <Buttons />
    </MainLayout>
  );
};

export default About;
