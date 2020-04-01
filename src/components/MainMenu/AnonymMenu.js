import React from 'react';
import { Mapper } from 'reactponsive';

import DesktopMenu from './DesktopMenu';

const MobileMenu = () => <div>MobileMenu</div>;

const AnonymMenu = () => {
  const componentMap = {
    default: <MobileMenu />,
    lg: <DesktopMenu isLogged={false} />,
  };
  return <Mapper mqs={componentMap} />;
};

export default AnonymMenu;
