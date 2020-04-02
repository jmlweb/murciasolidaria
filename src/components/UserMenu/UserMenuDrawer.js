import React from 'react';
import {
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
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

import { ROUTES } from '../../constants';

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

const UserMenu = ({ btnRef, onClose, isOpen, onSignOut, name, isAdmin }) => (
  <Drawer
    isOpen={isOpen}
    placement="right"
    onClose={onClose}
    finalFocusRef={btnRef}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader mt={8}>{name}</DrawerHeader>
      <DrawerBody as={Flex} alignItems="center" justifyContent="center">
        <Stack spacing={6}>
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
          <LinkWithIcon to={ROUTES.requestMaterial} icon={FiTruck}>
            Solicitar material
          </LinkWithIcon>
          <LinkWithIcon to={ROUTES.donations} icon={FiHeart} mr={2}>
            Donaciones
          </LinkWithIcon>
          <LinkWithIcon to={ROUTES.about} icon={FiHelpCircle} mr={2}>
            ¿Qué es?
          </LinkWithIcon>
        </Stack>
      </DrawerBody>
      <DrawerFooter as={Flex} justifyContent="center">
        <Button variantColor="red" onClick={onSignOut} leftIcon={FiUnlock}>
          Logout
        </Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

UserMenu.defaultProps = {
  name: '',
  isAdmin: false,
};

UserMenu.propTypes = {
  btnRef: PT.objectOf(PT.any).isRequired,
  onClose: PT.func.isRequired,
  isOpen: PT.bool.isRequired,
  onSignOut: PT.func.isRequired,
  name: PT.string,
  isAdmin: PT.bool,
};

export default UserMenu;
