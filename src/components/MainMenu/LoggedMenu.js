import React from 'react';
import { Mapper } from 'reactponsive';

import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const LoggedMenu = () => {
  const componentMap = {
    default: <MobileMenu isLogged />,
    lg: <DesktopMenu isLogged />,
  };
  return <Mapper mqs={componentMap} />;
};

export default LoggedMenu;
