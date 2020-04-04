import React from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Link,
  Stack,
} from '@chakra-ui/core';
import {
  FiActivity,
  FiUnlock,
  FiHeart,
  FiTruck,
  FiSettings,
  FiHelpCircle,
} from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import PT from 'prop-types';
import { useUser, useAuth, useFirestore, useFirestoreDocData } from 'reactfire';

import { ROUTES } from '../../constants';
import { useAlertNotification } from '../../hooks';
import GoogleSignIn from '../GoogleSignin';

const LinkWithIcon = ({ to, icon, children, ...props }) => (
  <Link as={RouterLink} to={to} fontSize="lg" {...props}>
    <Box display="inline-block" as={icon} /> {children}
  </Link>
);

LinkWithIcon.propTypes = {
  to: PT.string.isRequired,
  icon: PT.func.isRequired,
  children: PT.node.isRequired,
};

const MobileMenuDrawerView = ({
  btnRef,
  onClose,
  isOpen,
  isLogged,
  isAdmin,
  displayName,
  photoURL,
  onSignOut,
}) => (
  <Drawer
    isOpen={isOpen}
    placement="right"
    onClose={onClose}
    finalFocusRef={btnRef}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerBody as={Flex} alignItems="center" justifyContent="center">
        <Stack spacing={6}>
          <Box textAlign="center">
            <Avatar src={photoURL} name={displayName} size="xl" />
            <Box fontSize="xl" fontWeight="medium">
              {displayName || 'Anónimo'}
            </Box>
          </Box>
          {isAdmin && (
            <LinkWithIcon to={ROUTES.dashboard} icon={FiSettings}>
              Panel de control
            </LinkWithIcon>
          )}
          <Flex alignItems="center">
            <LinkWithIcon to={ROUTES.home} icon={FiActivity} isDisabled mr={2}>
              Mis Solicitudes
            </LinkWithIcon>
            <Badge variantColor="yellow">Pronto</Badge>
          </Flex>
          <LinkWithIcon
            to={ROUTES.requestMaterial}
            icon={FiTruck}
            color="teal.500"
          >
            Solicitar pantallas
          </LinkWithIcon>
          <LinkWithIcon
            to={ROUTES.donations}
            icon={FiHeart}
            mr={2}
            color="red.500"
          >
            Donaciones
          </LinkWithIcon>
          <LinkWithIcon
            to={ROUTES.about}
            icon={FiHelpCircle}
            mr={2}
            color="gray.600"
          >
            ¿Qué es?
          </LinkWithIcon>
        </Stack>
      </DrawerBody>
      <DrawerFooter as={Flex} justifyContent="center">
        {isLogged ? (
          <Button variantColor="red" onClick={onSignOut} leftIcon={FiUnlock}>
            Logout
          </Button>
        ) : (
          <GoogleSignIn />
        )}
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

MobileMenuDrawerView.defaultProps = {
  isLogged: false,
  isAdmin: false,
  displayName: undefined,
  photoURL: undefined,
  onSignOut: undefined,
};

MobileMenuDrawerView.propTypes = {
  btnRef: PT.objectOf(PT.any).isRequired,
  onClose: PT.func.isRequired,
  isOpen: PT.bool.isRequired,
  isLogged: PT.bool,
  isAdmin: PT.bool,
  displayName: PT.string,
  photoURL: PT.string,
  onSignOut: PT.func,
};

const AnonymDrawer = ({ btnRef, onClose, isOpen }) => (
  <MobileMenuDrawerView
    btnRef={btnRef}
    isOpen={isOpen}
    onClose={onClose}
    isLogged={false}
  />
);

AnonymDrawer.propTypes = {
  btnRef: PT.objectOf(PT.any).isRequired,
  onClose: PT.func.isRequired,
  isOpen: PT.bool.isRequired,
};

const LoggedDrawer = ({ btnRef, onClose, isOpen }) => {
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
    <MobileMenuDrawerView
      btnRef={btnRef}
      isOpen={isOpen}
      displayName={displayName}
      photoURL={photoURL}
      isAdmin={isAdmin}
      onSignOut={onSignOut}
      onClose={onClose}
      isLogged
    />
  );
};

LoggedDrawer.propTypes = {
  btnRef: PT.objectOf(PT.any).isRequired,
  onClose: PT.func.isRequired,
  isOpen: PT.bool.isRequired,
};

const MobileMenuDrawer = ({ isLogged, ...props }) =>
  isLogged ? <LoggedDrawer {...props} /> : <AnonymDrawer {...props} />;

MobileMenuDrawer.defaultProps = {
  isLogged: false,
};

MobileMenuDrawer.propTypes = {
  btnRef: PT.objectOf(PT.any).isRequired,
  onClose: PT.func.isRequired,
  isOpen: PT.bool.isRequired,
  isLogged: PT.bool,
};

export default MobileMenuDrawer;
