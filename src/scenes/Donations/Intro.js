import React from 'react';
import { useToggler } from 'reactponsive';
import {
  Badge,
  Box,
  Icon,
  List,
  ListItem,
  ListIcon,
  Link,
  Text,
  Stack,
  Image,
} from '@chakra-ui/core';
import { FiAtSign } from 'react-icons/fi';

import IntroBox from './IntroBox';

const Intro = () => {
  const isTablet = useToggler('md');
  const isDesktop = useToggler('lg');
  return (
    <Stack spacing={8}>
      <Stack spacing={2}>
        <Stack isInline={isDesktop} spacing={6} w="full">
          <IntroBox
            title="Aportaciones económicas"
            buttons={{
              primary: {
                href:
                  'https://www.gofundme.com/f/material-para-2000-pantallas-protectoras?utm_source=customer&utm_medium=copy_link-tip&utm_campaign=p_cp+share-sheet',
                title: 'Campaña en GoFundme',
                icon: 'arrow-forward',
              },
              secondary: {
                href: '#aportaciones-economicas',
                title: 'Más info',
              },
            }}
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
                icon: FiAtSign,
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
        <Stack isInline fontSize="lg" spacing={1} alignItems="center">
          <Icon name="info" color="gray.500" />
          <Box>
            También puedes contribuir{' '}
            <Link
              href="#donaciones-pantallas"
              color="teal.500"
              fontWeight="medium"
            >
              fabricando tus propias pantallas
            </Link>
          </Box>
        </Stack>
      </Stack>
      <Stack isInline={isTablet} spacing={6}>
        <Box
          overflow="hidden"
          borderRadius="lg"
          border="1px solid"
          borderColor="gray.200"
        >
          <Image
            width="100%"
            src="https://res.cloudinary.com/murciasolidaria/image/upload/c_fill,f_auto,fl_progressive,h_380,w_604/v1586481090/WhatsApp_Image_2020-04-07_at_22.21.43_dhrl90.jpg"
            alt=""
          />
        </Box>
        <Box
          overflow="hidden"
          borderRadius="lg"
          border="1px solid"
          borderColor="gray.200"
        >
          <Image
            width="100%"
            src="https://res.cloudinary.com/murciasolidaria/image/upload/c_fill,f_auto,fl_progressive,h_380,w_604/v1586481095/WhatsApp_Image_2020-04-03_at_14.42.06_trugvc.jpg"
            alt=""
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Intro;
