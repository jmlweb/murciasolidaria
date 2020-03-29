import React, { useRef, useState } from 'react';
import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Alert,
  AlertIcon,
  AlertTitle,
  Avatar,
  Button,
} from '@chakra-ui/core';
import { useAuth } from 'reactfire';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useToggler } from 'reactponsive';

const provider = new firebase.auth.GoogleAuthProvider();

const GoogleSignIn = () => {
  const auth = useAuth();
  const cancelRef = useRef();
  auth.useDeviceLanguage();
  const [error, setError] = useState();
  const onClose = () => setError(null);
  const isDesktop = useToggler('lg');

  const getSignInResult = () =>
    isDesktop
      ? auth.signInWithPopup(provider)
      : auth.signInWithRedirect(provider);

  const onClick = async () => {
    setError(null);
    try {
      await getSignInResult();
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <>
      <Button onClick={onClick} variant="ghost" padding={0}>
        <Avatar size="sm" />
      </Button>
      <AlertDialog
        isOpen={Boolean(error)}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogBody>
            <Alert status="error">
              <AlertIcon />
              <AlertTitle mr={2}>{error}</AlertTitle>
            </Alert>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default GoogleSignIn;
