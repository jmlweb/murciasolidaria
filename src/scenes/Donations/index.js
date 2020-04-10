import React from 'react';
import { Box, List, ListItem, Heading, Text, Stack } from '@chakra-ui/core';

import { Container, MainLayout } from '../../components';
import Intro from './Intro';
import FinantialContributions from './FinantialContributions';
import MaterialContributions from './MaterialContributions';

const Donations = () => (
  <MainLayout>
    <Container>
      <Stack spacing={12}>
        <Stack spacing={4}>
          <Heading as="h1" size="lg" fontSize={['24px', '32px']}>
            ¿Quieres ayudar a combatir el coronavirus sin tener que salir de
            casa?
          </Heading>
          <Box>
            <Intro />
          </Box>
        </Stack>
        <Box borderTop="1px solid" borderColor="gray.200" pt={8}>
          <FinantialContributions />
        </Box>
        <Box borderTop="1px solid" borderColor="gray.200" pt={8}>
          <MaterialContributions />
        </Box>
        <Box borderTop="1px solid" borderColor="gray.200" pt={8}>
          <Stack spacing={4}>
            <Text>
              En todo momento, todos los participantes del proyecto
              “MurciaSolidaria” trabajarán para facilitar todo el material
              sanitario que sea requerido por las instituciones a las que va
              dirigido el proyecto. Para ello es necesario contar tanto con
              recursos materiales óptimos para la fabricación de las
              protecciones como con recursos económicos que se invertirán en la
              adquisición de dicho material.
            </Text>
            <Box>
              <Text>
                No obstante, dadas las especialidades sanitarias y la situación
                actual de los proveedores del material, pueden producirse los
                siguientes escenarios:
              </Text>
              <List as="ol" styleType="decimal">
                <ListItem>
                  Que dada la alta demanda de peticiones de materiales plásticos
                  no pueda producirse un suministro o abastecimiento suficiente
                  para los creadores del proyecto MurciaSolidaria, lo que puede
                  derivar en la imposibilidad en la fabricación de las
                  protecciones.
                </ListItem>
                <ListItem>
                  Que dadas las especificaciones técnicas y de homologación a
                  los que son sometidos estos productos “anti-contagio”, puedan
                  no servir para el fin último que se persiguen, siendo estos
                  desechados por la entidad para los que se fabricaron.
                </ListItem>
              </List>
            </Box>
            <Text>
              Si los responsables del proyecto se encontraran en alguna de las
              situaciones anteriores, en ningún momento se devolverá el dinero
              donado por los usuarios de la web. En este caso, los responsables
              del proyecto donarán el dinero recogido a otras entidades u
              organizaciones de caridad que así lo necesiten y estimen oportuno.
              Respecto al material fabricado y no entregado, se transformará en
              la medida de lo posible para que pueda ser utilizado al máximo
              para otro tipo de finalidad para las mismas entidades que lo
              solicitaron y, en caso de no ser posible, se transformará en otro
              producto final que será entregado a otra entidad para su
              aprovechamiento.
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  </MainLayout>
);

export default Donations;
