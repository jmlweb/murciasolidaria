import React from 'react';
import { Avatar, Button } from '@chakra-ui/core';

import { useGoogleSignin } from '../../hooks';

const GoogleSignIn = () => {
  const onClick = useGoogleSignin();
  return (
    <Button onClick={onClick} variant="ghost" padding={0}>
      <Avatar size="sm" />
    </Button>
  );
};

export default GoogleSignIn;
