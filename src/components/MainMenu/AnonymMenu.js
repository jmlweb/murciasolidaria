import React from 'react';
import { Mapper } from 'reactponsive';

import DesktopMenu from './DesktopMenu';
import GoogleSignIn from '../GoogleSignin';

const AnonymMenu = () => {
  const componentMap = {
    default: <GoogleSignIn />,
    lg: <DesktopMenu isLogged={false} />,
  };
  return <Mapper mqs={componentMap} />;
};

export default AnonymMenu;
