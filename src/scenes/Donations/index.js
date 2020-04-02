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
  SimpleGrid,
  Image,
} from '@chakra-ui/core';
import { FiAtSign } from 'react-icons/fi';

import { CommonLink, Container, MainLayout } from '../../components';

const Donations = () => {
  const isDesktop = useToggler('xxl');
  return (
    <MainLayout>
      <Stack spacing={8}>
        <Box>
          <Container>
            <Stack
              isInline={isDesktop}
              spacing={10}
              flexDirection={['column-reverse', 'column-reverse', 'row']}
              mb={4}
            >
              <Stack spacing={6}>
                <Box>
                  <Heading as="h1" size="lg" fontSize={['24px', '32px']} mb={2}>
                    ¿Quieres ayudar a combatir el coronavirus sin tener que
                    salir de casa?
                  </Heading>
                  <Heading
                    as="h2"
                    size="lg"
                    fontSize={['18px', '24px']}
                    color="gray.500"
                  >
                    Dada la situación actual, está resultando difícil encontrar
                    las materias primas necesarias para fabricar las máscaras de
                    protección facial, mascarillas, trajes, etc.
                  </Heading>
                </Box>
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
                  indicando <strong>cuál de ellos</strong> y{' '}
                  <strong>en qué formato</strong> (grosor, tamaño de plancha,
                  etc.).
                </Text>
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
                <Text fontSize="xl" fontWeight="bold">
                  ¡Gracias por tu aportación!
                </Text>
              </Stack>
              <Box width="100%" maxW="520px" margin="0 auto">
                <Box
                  backgroundColor="teal.100"
                  border="1px solid"
                  borderColor="teal.200"
                  borderRadius="md"
                  p={[2, 2, 4]}
                  mb={4}
                >
                  <Text color="teal.600">
                    Puedes realizar tu aportación en la cuenta:
                  </Text>
                  <Text
                    fontSize={['md', 'lg', 'xl']}
                    fontWeight="bold"
                    color="teal.800"
                  >
                    ES60 2100 1130 3102 0003 7540
                  </Text>
                </Box>
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
        <Container>
          <SimpleGrid columns={[1, 1, 2]} spacing={8}>
            <Image
              src="https://res.cloudinary.com/murciasolidaria/image/upload/c_fill,e_auto_brightness,f_auto,fl_progressive,h_400,w_800/v1585754455/WhatsApp_Image_2020-04-01_at_12.07.06_tn60qy.jpg"
              alt=""
            />
            <Image
              src="https://res.cloudinary.com/murciasolidaria/image/upload/c_fill,e_auto_brightness,f_auto,fl_progressive,h_400,w_800/v1585754459/WhatsApp_Image_2020-04-01_at_12.07.28_dv5kn9.jpg"
              alt=""
            />
          </SimpleGrid>
        </Container>
      </Stack>
    </MainLayout>
  );
};

export default Donations;
