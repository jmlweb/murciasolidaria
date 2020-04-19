import React from 'react';
import { useUser, useFirestore, useAnalytics } from 'reactfire';
import { propOr } from 'ramda';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Button,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack,
  Flex,
} from '@chakra-ui/core';
import firebase from 'firebase/app';
import { FiHeart } from 'react-icons/fi';

import { Container, MainLayout, MaskGallery } from '../../components';
import { ROUTES } from '../../constants';
import {
  useAlertNotification,
  useLogPage,
  useErrorNotifier,
  useCounters,
} from '../../hooks';

import RequestForm from './RequestForm';

const safeProp = propOr('');

const RequestMaterialContent = () => {
  const analytics = useAnalytics();
  const user = useUser();
  const name = safeProp('displayName', user);
  const email = safeProp('email', user);
  const phone = safeProp('phoneNumber', user);
  const uid = safeProp('uid', user);
  const firestore = useFirestore();
  const counters = useCounters();
  const notify = useAlertNotification();
  const errorNotifier = useErrorNotifier({
    severity: 'error',
    component: 'request-material',
  });
  useLogPage();
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await firestore.collection('material-requests').add({
        ...values,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        loggedInEmail: email,
        status: 'requested',
      });
      const countersRef = firestore.collection('config').doc('counters');
      await countersRef.update({
        ...counters,
        requested: counters.requested + values.qty,
      });
      notify({
        title: 'La petición se ha creado correctamente',
        description: 'Recibirás una respuesta lo antes posible',
        status: 'success',
      });
      analytics.logEvent('goal_completion', { name: 'request_material' });
      resetForm();
    } catch (e) {
      notify({
        title: 'Ha habido un problema al crear los datos',
        description: e.message,
      });
      errorNotifier(e);
    }
    setSubmitting(false);
  };
  return (
    <RequestForm name={name} email={email} phone={phone} onSubmit={onSubmit} />
  );
};

RequestMaterialContent.displayName = 'RequestMaterialContent';

const RequestMaterial = () => {
  return (
    <MainLayout>
      <Stack spacing={8}>
        <Container>
          <Heading as="h1" size="lg" fontSize={['24px', '32px']} mb={2}>
            ¿Eres uno de nuestros héroes?
          </Heading>
          <Heading
            as="h2"
            size="lg"
            mb={2}
            fontSize={['18px', '24px']}
            color="gray.500"
          >
            Si formas parte del colectivo de trabajadores imprescindibles para
            luchar contra esta pandemia, rellena el siguiente formulario para
            solicitar pantallas protectoras GRATIS
          </Heading>
          {/* <Alert status="info" fontSize={['md', 'md', 'lg']} mb={[4, 6]}>
            <AlertIcon />
            Nuestro equipo se pondrá en contacto contigo a la mayor brevedad
            posible para concretar los detalles
          </Alert> */}
          <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            mb={[4, 6]}
            py={6}
          >
            <AlertIcon size="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="xl">
              ¡Lo sentimos!
            </AlertTitle>
            <AlertDescription
              maxWidth="lg"
              textAlign="left"
              mb={2}
              fontSize="lg"
            >
              En este momento la demanda ha superado nuestras existencias y no
              podemos servir más pantallas temporalmente.
            </AlertDescription>
            <AlertDescription maxWidth="lg" textAlign="left" fontSize="lg">
              Con tu contribución, podremos continuar fabricando pantallas para
              los que más las necesitan.
            </AlertDescription>
          </Alert>
          {/* <RequestMaterialContent /> */}
          <Flex justifyContent="center" alignItems="center" mb={8}>
            <Button
              size="lg"
              as={ReactRouterLink}
              to={ROUTES.donations}
              variantColor="red"
              leftIcon={FiHeart}
            >
              Donaciones
            </Button>
          </Flex>
        </Container>
        <MaskGallery />
      </Stack>
    </MainLayout>
  );
};

export default RequestMaterial;
