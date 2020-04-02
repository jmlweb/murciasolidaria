import React from 'react';
import { useAuth, useUser, useFirestore, useFirestoreDocData } from 'reactfire';

import {
  Badge,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Avatar,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants';

const UserDropdown = () => {
  const auth = useAuth();
  const { displayName, photoURL, uid } = useUser() || {};
  const userDetailsRef = useFirestore().collection('users').doc(uid);
  const { isAdmin } = useFirestoreDocData(userDetailsRef);
  const onClick = () => {
    auth.signOut();
  };
  return (
    <Menu>
      <MenuButton>
        <Avatar name={displayName} size="sm" src={photoURL} />
      </MenuButton>
      <MenuList placement="bottom-end">
        {isAdmin && (
          <MenuItem as={Link} to={ROUTES.dashboard}>
            Panel de control
          </MenuItem>
        )}
        <MenuItem>
          Mis solicitudes <Badge variantColor="yellow">Pronto</Badge>
        </MenuItem>
        <MenuItem onClick={onClick}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserDropdown;
