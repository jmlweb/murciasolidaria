import React, { forwardRef } from 'react';
import { Avatar, Button } from '@chakra-ui/core';
import PT from 'prop-types';

const UserMenuButton = forwardRef(({ onClick, photo, name }, ref) => {
  return (
    <Button onClick={onClick} variant="ghost" padding={0} ref={ref}>
      <Avatar src={photo} name={name} size="sm" />
    </Button>
  );
});

UserMenuButton.defaultProps = {
  photo: undefined,
};

UserMenuButton.propTypes = {
  onClick: PT.func.isRequired,
  photo: PT.string,
  name: PT.string.isRequired,
};

export default UserMenuButton;
