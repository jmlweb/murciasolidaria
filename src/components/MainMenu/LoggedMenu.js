import React from 'react';
import { Mapper } from 'reactponsive';

import DesktopMenu from './DesktopMenu';
import { useGoogleSignin } from '../../hooks';
import UserMenu from '../UserMenu';

const LoggedMenu = () => {
  const onLogin = useGoogleSignin();
  const componentMap = {
    default: <UserMenu />,
    lg: <DesktopMenu isLogged onLogin={onLogin} />,
  };
  return <Mapper mqs={componentMap} />;
};

export default LoggedMenu;
