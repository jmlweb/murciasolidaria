import React from 'react';
import { Mapper } from 'reactponsive';

import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const AnonymMenu = () => {
  const componentMap = {
    default: <MobileMenu isLogged={false} />,
    lg: <DesktopMenu isLogged={false} />,
  };
  return <Mapper mqs={componentMap} />;
};

export default AnonymMenu;
