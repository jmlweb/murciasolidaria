import React from 'react';
import { Button, Box, Heading, Text, Stack } from '@chakra-ui/core';
import { useToggler } from 'reactponsive';
import { FiAtSign } from 'react-icons/fi';

const MasksContributions = () => {
  const isTablet = useToggler('md');
  return (
    <Stack isInline={isTablet} spacing={6} id="donaciones-pantallas">
      <Stack spacing={4}>
        <Heading as="h2" size="lg" fontSize={['24px', '32px']}>
          Haz tu propia pantalla protectora
        </Heading>
        <Text fontSize="lg" fontWeight="medium">
          Si tienes tu propio equipamiento para el corte de material puedes
          fabricar tu propia pantalla protectora.
        </Text>
        <Text fontSize="lg">
          Desde NIDO Robotics, te ofrecemos las instrucciones de montaje y los
          ficheros DXF de forma totalmente gratuita para que puedas colaborar
          con tu propia pantalla protectora.
        </Text>
        <Text fontSize="lg">
          Ponte en contacto con nosotros para acordar un método de entrega y tus
          pantallas llegarán a los que más lo necesitan.
        </Text>
        <Box textAlign={['center', 'center', 'left']}>
          <Button
            as="a"
            href="mailto:hola@murciasolidaria.com"
            variantColor="red"
            size="lg"
            leftIcon={FiAtSign}
          >
            Escríbenos un email
          </Button>
        </Box>
      </Stack>
      <Stack spacing={4} width={['360px', '360px', '300px', '360px']} mx="auto">
        <Button
          as="a"
          href="/Frontal_COVID19_Nido_R02_1mm.dxf"
          variantColor="teal"
          size="lg"
          leftIcon="download"
          download
          width="360px"
          maxWidth="100%"
        >
          DXF Frontal
        </Button>
        <Button
          as="a"
          href="/Visera_COVID19_Nido_R02_6mm.dxf"
          variantColor="teal"
          size="lg"
          leftIcon="download"
          download
          width="360px"
          maxWidth="100%"
        >
          DXF Visera
        </Button>
        <Button
          as="a"
          href="/manual_mascara.pdf"
          variantColor="teal"
          size="lg"
          leftIcon="download"
          download
          width="360px"
          maxWidth="100%"
        >
          Instrucciones de montaje
        </Button>
      </Stack>
    </Stack>
  );
};

export default MasksContributions;
