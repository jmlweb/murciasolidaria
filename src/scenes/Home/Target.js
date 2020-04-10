import React from 'react';
import {
  Badge,
  Box,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/core';
import PT from 'prop-types';
import { useToggler } from 'reactponsive';

import { Container } from '../../components';
import Buttons from './Buttons';

const Item = ({ children }) => (
  <ListItem fontSize="lg">
    <ListIcon icon="info" color="teal.500" /> {children}
  </ListItem>
);

Item.propTypes = {
  children: PT.node.isRequired,
};

const Target = () => {
  const isDesktop = useToggler('lg');
  return (
    <Container my={8}>
      <Stack isInline={isDesktop} spacing={10} mt={[8, 10]}>
        <Stack spacing={2}>
          <Heading as="h3" size="lg" fontSize="24px">
            ¿A quién va dirigida esta iniciativa?
          </Heading>
          <Stack spacing={4}>
            <Text fontSize={['lg', 'lg', 'xl']}>
              Pueden solicitar sus pantallas protectoras todos aquellos
              colectivos que desempeñen un trabajo imprescindible en el estado
              de alarma actual:
            </Text>
            <SimpleGrid as={List} columns={[1, 1, 2, 2, 3]} spacing={4} pb={6}>
              <Item>Personal sanitario</Item>
              <Item>Farmacéuticos</Item>
              <Item>Centros de salud</Item>
              <Item>Centros de discapacitados</Item>
              <Item>Otros centros similares</Item>
              <Item>Cuerpos de seguridad</Item>
              <Item>Tiendas de alimentación</Item>
              <Item>Supermercados</Item>
            </SimpleGrid>
            <Text fontSize="lg">
              Con la iniciativa de murciasolidaria.com pretendemos ayudar a
              todas aquellas personas que cada día se juegan la vida y las de su
              entorno para luchar contra esta pandemia.{' '}
            </Text>
            <Text fontSize="lg">
              <strong>
                ¡Entre todos conseguiremos ganarle la batalla al Coronavirus!
              </strong>
            </Text>
            <Buttons />
          </Stack>
        </Stack>
        <Stack spacing={2}>
          <Heading as="h3" size="lg" fontSize="24px">
            Ayúdanos a ayudar
          </Heading>
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
    </Container>
  );
};

export default Target;
