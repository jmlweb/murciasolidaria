import React from 'react';
import { Box, Link, Stack } from '@chakra-ui/core';
import { FiHeart, FiTruck, FiHelpCircle } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import PT from 'prop-types';

import UserDropdown from './UserDropdown';
import GoogleSignIn from '../GoogleSignin';

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

const DesktopMenu = ({ isLogged }) => (
  <Stack spacing={12} isInline alignItems="center">
    <LinkWithIcon to={ROUTES.donations} icon={FiHeart} color="red.500">
      Donaciones
    </LinkWithIcon>
    <LinkWithIcon to={ROUTES.requestMaterial} icon={FiTruck} color="teal.500">
      Solicitar pantallas
    </LinkWithIcon>
    <LinkWithIcon to={ROUTES.about} icon={FiHelpCircle} color="gray.600">
      ¿Qué es?
    </LinkWithIcon>
    {isLogged && <UserDropdown />}
    {!isLogged && <GoogleSignIn />}
  </Stack>
);

DesktopMenu.propTypes = {
  isLogged: PT.bool.isRequired,
};

export default DesktopMenu;
