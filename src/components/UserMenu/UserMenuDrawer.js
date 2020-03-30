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
import { FiActivity, FiUnlock, FiHeart, FiAlertOctagon } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import PT from 'prop-types';

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

const UserMenu = ({ btnRef, onClose, isOpen, onSignOut, name }) => (
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
          <Flex alignItems="center">
            <LinkWithIcon to="/" icon={FiActivity} isDisabled mr={2}>
              Mis Solicitudes
            </LinkWithIcon>
            <Badge variantColor="yellow">Pronto</Badge>
          </Flex>
          <LinkWithIcon to="/request-material" icon={FiAlertOctagon}>
            Solicitar material
          </LinkWithIcon>
          <Flex alignItems="center">
            <LinkWithIcon to="/" icon={FiHeart} isDisabled mr={2}>
              Donar material
            </LinkWithIcon>
            <Badge variantColor="yellow">Pronto</Badge>
          </Flex>
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
};

UserMenu.propTypes = {
  btnRef: PT.objectOf(PT.any).isRequired,
  onClose: PT.func.isRequired,
  isOpen: PT.bool.isRequired,
  onSignOut: PT.func.isRequired,
  name: PT.string,
};

export default UserMenu;
