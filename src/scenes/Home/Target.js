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

import { Container } from '../../components';

const Target = () => (
  <Container maxWidth="4xl" mt={8}>
    <Stack my={[8, 10]} spacing={2}>
      <Heading as="h3" size="lg" fontSize="24px">
        ¿A quién va dirigida esta iniciativa?
      </Heading>
      <Stack spacing={6}>
        <Text fontSize={['lg', 'lg', 'xl']}>
          Pueden solicitar sus pantallas protectoras todos aquellos colectivos
          que desempeñen un trabajo imprescindible en el estado de alarma
          actual:
        </Text>
        <SimpleGrid as={List} columns={2} spacing={10} mt={4}>
          <ListItem fontSize="lg">
            <ListIcon icon="check-circle" color="teal.500" /> Personal sanitario
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon icon="check-circle" color="teal.500" /> Farmacéuticos
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon icon="check-circle" color="teal.500" /> Centros de salud
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon icon="check-circle" color="teal.500" /> Centros de
            discapacitados
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon icon="check-circle" color="teal.500" /> Otros centros
            similares
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon icon="check-circle" color="teal.500" /> Cuerpos de
            seguridad
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon icon="check-circle" color="teal.500" /> Tiendas de
            alimentación
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon icon="check-circle" color="teal.500" /> Supermercados
          </ListItem>
        </SimpleGrid>
      </Stack>
    </Stack>
  </Container>
);

export default Target;
