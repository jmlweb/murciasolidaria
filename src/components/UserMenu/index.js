import React, { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/core';
import { useUser, useAuth, useFirestore, useFirestoreDocData } from 'reactfire';

import UserMenuButton from './UserMenuButton';
import UserMenuDrawer from './UserMenuDrawer';
import { useAlertNotification } from '../../hooks';

const UserMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { displayName, photoURL, uid } = useUser() || {};
  const auth = useAuth();
  const userDetailsRef = useFirestore().collection('users').doc(uid);
  const { isAdmin } = useFirestoreDocData(userDetailsRef);
  const notify = useAlertNotification({
    title: 'Ha habido un problema al cerrar la cuenta.',
  });
  const onSignOut = async () => {
    try {
      onClose();
      await auth.signOut();
    } catch (e) {
      notify({
        description: e.message,
      });
    }
  };
  return (
    <>
      <UserMenuButton
        ref={btnRef}
        onClick={onOpen}
        photo={photoURL}
        name={displayName}
      />
      <UserMenuDrawer
        btnRef={btnRef}
        isOpen={isOpen}
        onClose={onClose}
        onSignOut={onSignOut}
        name={displayName}
        isAdmin={isAdmin}
      />
    </>
  );
};

export default UserMenu;
