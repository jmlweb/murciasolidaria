import React from 'react';
import {
  Button,
  Badge,
  Box,
  Heading,
  Text,
  Stack,
  Link,
} from '@chakra-ui/core';
import { useToggler } from 'reactponsive';

import { CommonLink } from '../../components';

const FinantialContributions = () => {
  const isTablet = useToggler('md');
  return (
    <Stack isInline={isTablet} spacing={6} id="aportaciones-economicas">
      <Stack spacing={4}>
        <Heading as="h2" size="lg" fontSize={['24px', '32px']}>
          Ayúdanos a ayudar
        </Heading>
        <Text fontSize="lg" fontWeight="medium">
          Este estado de alarma social nos afecta a todos. En un momento
          histórico en el que el miedo se ha apoderado de la sociedad es
          importante ayudar a los profesionales que luchan contra el coronavirus
          a diario.
        </Text>
        <Text fontSize="lg">
          En{' '}
          <CommonLink href="https://www.nidorobotics.com/">
            NIDO Robotics
          </CommonLink>{' '}
          comenzamos con esta iniciativa consumiendo nuestros propios recursos,
          con los que{' '}
          <strong>hemos fabricado 1.000 pantallas protectoras</strong>{' '}
          repartidas en hospitales y centros de salud, tal y como mostramos en
          nuestras redes sociales. Además, colaboramos con empresas y grupos de
          emprendedores para optimizar la fabricación y los tiempos de entrega.
        </Text>
        <Text fontSize="lg">
          Sin embargo, nuestros recursos se agotan y necesitamos que nos ayudéis
          a conseguir o incluso superar nuestro objetivo, porque{' '}
          <strong>con 3.500 euros se pueden fabricar 2.000 unidades</strong>.
        </Text>
        <Text fontSize="lg">
          Todo el dinero recaudado irá destinado exclusivamente a la compra del
          material necesario. Cada aportación, por pequeña que sea, contribuye a
          frenar el avance de la pandemia.{' '}
        </Text>
        <Text fontSize="lg">
          También aceptamos{' '}
          <Link href="#donaciones-material" color="teal.500">
            donaciones de material
          </Link>{' '}
          o{' '}
          <Link href="#donaciones-pantallas" color="teal.500">
            de pantallas fabricadas por ti
          </Link>
          . ¡Gracias por tu ayuda!
        </Text>
        <Box textAlign={['center', 'center', 'left']}>
          <Button
            as="a"
            href="https://www.gofundme.com/f/material-para-2000-pantallas-protectoras?utm_source=customer&utm_medium=copy_link-tip&utm_campaign=p_cp+share-sheet"
            rel="external"
            target="_blank"
            variantColor="red"
            size="lg"
            leftIcon="arrow-forward"
          >
            Visita la campaña en GoFundMe
          </Button>
        </Box>
      </Stack>
      <Stack spacing={2}>
        <Badge
          variantColor="yellow"
          py={2}
          px={4}
          mt={1}
          fontSize="md"
          width="full"
          maxW="360px"
          mx="auto"
          textAlign="center"
          borderRadius="lg"
        >
          ES60 2100 1130 3102 0003 7540
        </Badge>
        <Box
          as="embed"
          width={['360px', '360px', '300px', '360px']}
          height={['480px', '480px', '400px', '480px']}
          src="https://www.gofundme.com/mvc.php?route=widgets/mediawidget&fund=material-para-2000-pantallas-protectoras&image=1&coinfo=1&preview=1"
          type="text/html"
          mx="auto"
        />
      </Stack>
    </Stack>
  );
};

export default FinantialContributions;
