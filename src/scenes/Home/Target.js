import React from 'react';
import {
  Heading,
  Text,
  Stack,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/core';
import PT from 'prop-types';

import { Container } from '../../components';

const Item = ({ children }) => (
  <ListItem
    fontSize="lg"
    backgroundColor="gray.50"
    p={4}
    border="1px solid"
    borderColor="gray.200"
    borderRadius="md"
  >
    <ListIcon icon="info" color="teal.500" /> {children}
  </ListItem>
);

Item.propTypes = {
  children: PT.node.isRequired,
};

const Target = () => (
  <Container maxWidth="4xl" my={8}>
    <Stack mt={[8, 10]} spacing={2}>
      <Heading as="h3" size="lg" fontSize="24px">
        ¿A quién va dirigida esta iniciativa?
      </Heading>
      <Stack spacing={6}>
        <Text fontSize={['lg', 'lg', 'xl']}>
          Pueden solicitar sus pantallas protectoras todos aquellos colectivos
          que desempeñen un trabajo imprescindible en el estado de alarma
          actual:
        </Text>
        <SimpleGrid as={List} columns={[1, 1, 2]} spacing={10} mt={4} pb={6}>
          <Item>Personal sanitario</Item>
          <Item>Farmacéuticos</Item>
          <Item>Centros de salud</Item>
          <Item>Centros de discapacitados</Item>
          <Item>Otros centros similares</Item>
          <Item>Cuerpos de seguridad</Item>
          <Item>Tiendas de alimentación</Item>
          <Item>Supermercados</Item>
        </SimpleGrid>
      </Stack>
    </Stack>
  </Container>
);

export default Target;
