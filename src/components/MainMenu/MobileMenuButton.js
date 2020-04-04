import React, { forwardRef } from 'react';
import { IconButton } from '@chakra-ui/core';
import PT from 'prop-types';
import { FiMenu } from 'react-icons/fi';

const UserMenuButton = forwardRef(({ onClick }, ref) => {
  return (
    <IconButton
      onClick={onClick}
      variant="ghost"
      padding={0}
      ref={ref}
      icon={FiMenu}
    />
  );
});

UserMenuButton.propTypes = {
  onClick: PT.func.isRequired,
};

export default UserMenuButton;
