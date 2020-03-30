import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
  Button,
} from '@chakra-ui/core';
import { AiOutlineGoogle } from 'react-icons/ai';
import PT from 'prop-types';

import { useGoogleSignin } from '../../hooks';

const NeedSignInAlert = ({ title }) => {
  const onClick = useGoogleSignin();
  return (
    <Alert
      status="info"
      variant="subtle"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon size="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {title}
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        <Text>Por favor, accede con tu cuenta de Google</Text>
        <Text mt={2}>
          <Button
            variantColor="gray"
            size="lg"
            onClick={onClick}
            leftIcon={AiOutlineGoogle}
          >
            Identificarme
          </Button>
        </Text>
      </AlertDescription>
    </Alert>
  );
};

NeedSignInAlert.defaultProps = {
  title: 'Esta sección necesita identificación',
};

NeedSignInAlert.propTypes = {
  title: PT.string,
};

export default NeedSignInAlert;
