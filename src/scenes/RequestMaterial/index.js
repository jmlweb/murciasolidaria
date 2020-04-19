import React from 'react';
import { useUser, useFirestore, useAnalytics } from 'reactfire';
import { propOr } from 'ramda';
import { Heading, Alert, AlertIcon, Stack } from '@chakra-ui/core';
import firebase from 'firebase/app';

import { Container, MainLayout, MaskGallery } from '../../components';
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
          <Alert status="info" fontSize={['md', 'md', 'lg']} mb={[4, 6]}>
            <AlertIcon />
            Nuestro equipo se pondrá en contacto contigo a la mayor brevedad
            posible para concretar los detalles
          </Alert>
          <RequestMaterialContent />
        </Container>
        <MaskGallery />
      </Stack>
    </MainLayout>
  );
};

export default RequestMaterial;
