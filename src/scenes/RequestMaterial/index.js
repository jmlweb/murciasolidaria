import React from 'react';
import { AuthCheck, useUser, useFirestore } from 'reactfire';
import { propOr } from 'ramda';
import { Heading, Alert, AlertIcon } from '@chakra-ui/core';
import firebase from 'firebase/app';

import { Container, MainLayout, NeedSignInAlert } from '../../components';
import { useAlertNotification } from '../../hooks';
import RequestForm from './RequestForm';

const safeProp = propOr('');

const RequestMaterialContent = () => {
  const user = useUser();
  const name = safeProp('displayName', user);
  const email = safeProp('email', user);
  const phone = safeProp('phoneNumber', user);
  const uid = safeProp('uid', user);
  const firestore = useFirestore();
  const notify = useAlertNotification();
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await firestore.collection('material-requests').add({
        ...values,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        loggedInEmai: email,
        status: 'requested',
      });
      notify({
        title: 'La petición se ha creado correctamente',
        description: 'Recibirás una respuesta lo antes posible',
        status: 'success',
      });
      resetForm();
    } catch (e) {
      notify({
        title: 'Ha habido un problema al crear los datos',
        description: e.message,
      });
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
          solicitar pantallas protectoras
        </Heading>
        <Alert status="info" fontSize={['md', 'md', 'lg']} mb={[4, 6]}>
          <AlertIcon />
          Nuestro equipo se pondrá en contacto contigo a la mayor brevedad
          posible para concretar los detalles
        </Alert>
        <AuthCheck
          fallback={
            <NeedSignInAlert title="Identifícate para solicitar material" />
          }
        >
          <RequestMaterialContent />
        </AuthCheck>
      </Container>
    </MainLayout>
  );
};

export default RequestMaterial;
