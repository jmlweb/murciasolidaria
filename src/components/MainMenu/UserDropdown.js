import React from 'react';
import { useAuth, useUser, useFirestore, useFirestoreDocData } from 'reactfire';
import PT from 'prop-types';
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

const DashboardItem = ({ uid }) => {
  const userDetailsRef = useFirestore().collection('users').doc(uid);
  const { isAdmin } = useFirestoreDocData(userDetailsRef);
  return isAdmin ? (
    <MenuItem as={Link} to={ROUTES.dashboard}>
      Panel de control
    </MenuItem>
  ) : null;
};

DashboardItem.propTypes = {
  uid: PT.string.isRequired,
};

const UserDropdown = () => {
  const auth = useAuth();
  const { displayName, photoURL, uid } = useUser() || {};
  const onClick = () => {
    auth.signOut();
  };
  return (
    <Menu>
      <MenuButton>
        <Avatar name={displayName} size="sm" src={photoURL} />
      </MenuButton>
      <MenuList placement="bottom-end">
        {uid && <DashboardItem uid={uid} />}
        <MenuItem>
          Mis solicitudes <Badge variantColor="yellow">Pronto</Badge>
        </MenuItem>
        <MenuItem onClick={onClick}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserDropdown;
