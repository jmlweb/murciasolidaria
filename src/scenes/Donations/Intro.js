import React from 'react';
import { useToggler } from 'reactponsive';
import {
  Badge,
  Box,
  List,
  ListItem,
  ListIcon,
  Text,
  Stack,
} from '@chakra-ui/core';

import IntroBox from './IntroBox';

const Intro = () => {
  const isDesktop = useToggler('lg');
  return (
    <Stack isInline={isDesktop} spacing={6} w="full">
      <IntroBox
        title="Aportaciones económicas"
        buttons={{
          primary: {
            href:
              'https://www.gofundme.com/f/material-para-2000-pantallas-protectoras?utm_source=customer&utm_medium=copy_link-tip&utm_campaign=p_cp+share-sheet',
            title: 'Campaña en GoFundme',
          },
          secondary: {
            href: '#aportaciones-economicas',
            title: 'Más info',
          },
        }}
        bg="red.50"
        borderColor="red.300"
      >
        <Text>
          Hemos fabricado <strong>más de 1000 pantallas</strong> protectoras{' '}
          <strong>con nuestros propios recursos</strong>, pero se están
          agotando, y <strong>necesitamos vuestra ayuda</strong> para poder
          seguir fabricando más.
        </Text>
        <Text>
          <strong>Puedes realizar tu aportación</strong> en la cuenta:{' '}
          <Badge
            variantColor="yellow"
            py={2}
            px={4}
            mt={1}
            fontSize="sm"
            as="span"
          >
            ES60 2100 1130 3102 0003 7540
          </Badge>
        </Text>
      </IntroBox>
      <IntroBox
        title="Donaciones de material"
        buttons={{
          primary: {
            href: 'mailto:hola@murciasolidaria.com',
            title: 'Contactar',
          },
          secondary: {
            href: '#donaciones-material',
            title: 'Más info',
          },
        }}
      >
        <Text>
          Si tu empresa tiene o puede encontrar alguno de estos materiales,
          sería de gran ayuda para continuar con la producción de EPIs:
        </Text>
        <List>
          <ListItem>
            <ListIcon icon="check-circle" color="teal.500" />{' '}
            <Box as="strong" fontWeight="medium">
              Planchas o láminas de plástico transparente
            </Box>
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="teal.500" />{' '}
            <Box as="strong" fontWeight="medium">
              Planchas de plástico de 6 mm o de 0.5 a 1 mm
            </Box>
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="teal.500" />{' '}
            <Box as="strong" fontWeight="medium">
              Rollos de Tyvek
            </Box>
          </ListItem>
        </List>
      </IntroBox>
    </Stack>
  );
};

export default Intro;
