import React from 'react';
import { Mapper } from 'reactponsive';

import DesktopMenu from './DesktopMenu';
import { useGoogleSignin } from '../../hooks';

const MobileMenu = () => <div>MobileMenu</div>;

const LoggedMenu = () => {
  const onLogin = useGoogleSignin();
  const componentMap = {
    default: <MobileMenu />,
    lg: <DesktopMenu isLogged onLogin={onLogin} />,
  };
  return <Mapper mqs={componentMap} />;
};

export default LoggedMenu;
