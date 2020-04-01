import React from 'react';
import { Box, Link, Stack } from '@chakra-ui/core';
import { FiHeart, FiTruck, FiHelpCircle } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import PT from 'prop-types';

import UserDropdown from './UserDropdown';
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

const DesktopMenu = ({ isLogged }) => (
  <Stack spacing={12} isInline alignItems="center">
    <LinkWithIcon to="/donaciones" icon={FiHeart}>
      Donaciones
    </LinkWithIcon>
    <LinkWithIcon to="/solicitar-material" icon={FiTruck}>
      Solicitar material
    </LinkWithIcon>
    <LinkWithIcon to="/que-es" icon={FiHelpCircle}>
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
