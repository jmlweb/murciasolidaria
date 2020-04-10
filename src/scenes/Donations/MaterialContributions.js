import React from 'react';
import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  List,
  ListItem,
  Flex,
  ListIcon,
  Image,
} from '@chakra-ui/core';
import { useToggler } from 'reactponsive';
import { FiAtSign } from 'react-icons/fi';

const FinantialContributions = () => {
  const isTablet = useToggler('md');
  return (
    <Stack isInline={isTablet} spacing={6} id="donaciones-material">
      <Stack spacing={4} flex={1}>
        <Heading as="h2" size="lg" fontSize={['24px', '32px']}>
          El material que no estás usando puede salvar vidas
        </Heading>
        <Text fontSize="lg" fontWeight="medium">
          Dada la situación actual, está resultando difícil encontrar las
          materias primas necesarias para fabricar las máscaras de protección
          facial, mascarillas, trajes, etc.
        </Text>
        <Text fontSize="lg">
          Sobre todo, los plásticos transparentes están cada vez menos
          disponibles debido a la alta demanda de los diferentes grupos que
          estamos fabricando material de apoyo a los sanitarios y cuerpos de
          seguridad.
        </Text>
        <Box>
          <Text fontSize="lg" mb={3}>
            <strong>
              Si tu empresa tiene o puede encontrar alguno de los siguientes
              materiales, sería de gran ayuda
            </strong>{' '}
            para continuar con la producción de EPI’s:
          </Text>
          <List>
            <ListItem as={Flex} fontSize="lg" alignItems="flex-start" mb={2}>
              <ListIcon icon="check-circle" color="teal.500" mt={1} />
              <Box>
                <Heading as="h3" fontSize="lg">
                  Planchas o láminas de plástico transparente.
                </Heading>
                <Text>
                  Estamos usando PET de 1mm de grosor, pero nos vale cualquier
                  otro plástico de igual o menor grosor, siempre que sea
                  transparente. Acrílico, acetato, etc.
                </Text>
              </Box>
            </ListItem>
            <ListItem as={Flex} fontSize="lg" alignItems="flex-start" mb={2}>
              <ListIcon icon="check-circle" color="teal.500" mt={1} />
              <Box>
                <Heading as="h3" fontSize="lg">
                  Planchas de plástico de 6 mm o de 0.5 a 1 mm.
                </Heading>
                <Text>
                  Con estos plásticos podemos producir las sujeciones para las
                  máscaras. Estos no necesitan ser transparentes
                </Text>
              </Box>
            </ListItem>
            <ListItem as={Flex} fontSize="lg" alignItems="flex-start" mb={2}>
              <ListIcon icon="check-circle" color="teal.500" mt={1} />
              <Box>
                <Heading as="h3" fontSize="lg">
                  Rollos de Tyvek.
                </Heading>
                <Text>
                  Este material es útil para fabricar delantales y trajes
                  impermeables.
                </Text>
              </Box>
            </ListItem>
          </List>
        </Box>
        <Box>
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
      <Stack spacing={2} width={['360px', '360px', '300px', '360px']} mx="auto">
        <Image
          src="https://res.cloudinary.com/murciasolidaria/image/upload/c_fill,f_auto,fl_progressive,h_240,w_360/v1585754455/WhatsApp_Image_2020-04-01_at_12.07.06_tn60qy.jpg"
          alt=""
        />
        <Image
          src="https://res.cloudinary.com/murciasolidaria/image/upload/c_fill,f_auto,fl_progressive,h_240,w_360,x_680/v1585754459/WhatsApp_Image_2020-04-01_at_12.07.28_dv5kn9.jpg"
          alt=""
        />
      </Stack>
    </Stack>
  );
};

export default FinantialContributions;
