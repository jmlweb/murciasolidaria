import React from 'react';
import { Button } from '@chakra-ui/core';
import { IoLogoGoogle } from 'react-icons/io';

import { useGoogleSignin } from '../../hooks';

const GoogleSignIn = () => {
  const onClick = useGoogleSignin();
  return (
    <Button variantColor="red" onClick={onClick} leftIcon={IoLogoGoogle}>
      Login
    </Button>
  );
};

export default GoogleSignIn;
