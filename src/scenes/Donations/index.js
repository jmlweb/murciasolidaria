import React from 'react';
import { useToggler } from 'reactponsive';
import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  ListIcon,
  Heading,
  Text,
  Stack,
  AspectRatioBox,
} from '@chakra-ui/core';
import { FiAtSign } from 'react-icons/fi';

import {
  CommonLink,
  Container,
  MainLayout,
  MaskGallery,
} from '../../components';

const Donations = () => {
  const isDesktop = useToggler('lg');
  return (
    <MainLayout>
      <Stack spacing={10}>
        <Box>
          <Container>
            <Stack
              isInline={isDesktop}
              spacing={10}
              flexDirection={['column-reverse', 'column-reverse', 'row']}
              mb={4}
            >
              <Stack spacing={6}>
                <Heading as="h1" size="lg" fontSize={['24px', '32px']} mb={2}>
                  ¿Quieres ayudar a combatir el coronavirus sin tener que salir
                  de casa?
                </Heading>
                <Heading
                  as="h2"
                  size="lg"
                  mb={2}
                  fontSize={['18px', '24px']}
                  color="gray.500"
                >
                  Dada la situación actual, está resultando difícil encontrar
                  las materias primas necesarias para fabricar las máscaras de
                  protección facial, mascarillas, trajes, etc.
                </Heading>
                <Text fontSize={['lg', 'lg', 'xl']}>
                  Sobre todo, los plásticos transparentes están cada vez menos
                  disponibles debido a la alta demanda de los diferentes grupos
                  que estamos fabricando material de apoyo a los sanitarios y
                  cuerpos de seguridad.
                </Text>
                <Box>
                  <Text fontSize={['lg', 'lg', 'xl']} mb={3}>
                    Si tu empresa tiene o puede encontrar alguno de los
                    siguientes materiales, sería de gran ayuda para continuar
                    con la producción de EPI’s:
                  </Text>
                  <List>
                    <ListItem
                      as={Flex}
                      fontSize="xl"
                      alignItems="flex-start"
                      mb={2}
                    >
                      <ListIcon icon="check-circle" color="teal.500" mt={1} />
                      <Box>
                        <Heading as="h3" fontSize="xl">
                          Planchas o láminas de plástico transparente.
                        </Heading>
                        <Text>
                          Estamos usando PET de 1mm de grosor, pero nos vale
                          cualquier otro plástico de igual o menor grosor,
                          siempre que sea transparente. Acrílico, acetato, etc.
                        </Text>
                      </Box>
                    </ListItem>
                    <ListItem
                      as={Flex}
                      fontSize="xl"
                      alignItems="flex-start"
                      mb={2}
                    >
                      <ListIcon icon="check-circle" color="teal.500" mt={1} />
                      <Box>
                        <Heading as="h3" fontSize="xl">
                          Planchas de plástico de 6 mm o de 0.5 a 1 mm.
                        </Heading>
                        <Text>
                          Con estos plásticos podemos producir las sujeciones
                          para las máscaras. Estos no necesitan ser
                          transparentes
                        </Text>
                      </Box>
                    </ListItem>
                    <ListItem
                      as={Flex}
                      fontSize="xl"
                      alignItems="flex-start"
                      mb={2}
                    >
                      <ListIcon icon="check-circle" color="teal.500" mt={1} />
                      <Box>
                        <Heading as="h3" fontSize="xl">
                          Rollos de Tyvek.
                        </Heading>
                        <Text>
                          Este material es útil para fabricar delantales y
                          trajes impermeables.
                        </Text>
                      </Box>
                    </ListItem>
                  </List>
                </Box>
                <Text fontSize="xl">
                  Si puedes aportar alguno de estos materiales, contacta con
                  nosotros a través del correo electrónico{' '}
                  <CommonLink href="mailto:hola@murciasolidaria.com">
                    hola@murciasolidaria.com
                  </CommonLink>{' '}
                  indicando cuál de ellos y en qué formato (grosor, tamaño de
                  plancha, etc.).
                </Text>
                <Box>
                  <Button
                    as="a"
                    href="mailto:hola@murciasolidaria.com"
                    variantColor="teal"
                    size="lg"
                    leftIcon={FiAtSign}
                  >
                    Contactar para aportar material
                  </Button>
                </Box>
                <Text fontSize="xl" fontWeight="bold">
                  ¡Gracias por tu aportación!
                </Text>
              </Stack>
              <Box width="100%" maxW="520px" margin="0 auto">
                <AspectRatioBox maxW="520px" ratio={0.75}>
                  <Box
                    as="embed"
                    width="100%"
                    src="https://www.gofundme.com/mvc.php?route=widgets/mediawidget&fund=material-para-2000-pantallas-protectoras&image=1&coinfo=1&preview=1"
                    type="text/html"
                  />
                </AspectRatioBox>
              </Box>
            </Stack>
          </Container>
        </Box>
        <MaskGallery />
      </Stack>
    </MainLayout>
  );
};

export default Donations;
