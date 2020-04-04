import React, { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/core';
import PT from 'prop-types';

import MobileMenuButton from './MobileMenuButton';
import MobileMenuDrawer from './MobileMenuDrawer';

const MobileMenu = ({ isLogged }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <MobileMenuButton ref={btnRef} onClick={onOpen} />
      <MobileMenuDrawer
        btnRef={btnRef}
        isOpen={isOpen}
        onClose={onClose}
        isLogged={isLogged}
      />
    </>
  );
};

MobileMenu.defaultProps = {
  isLogged: false,
};

MobileMenu.propTypes = {
  isLogged: PT.bool,
};

export default MobileMenu;
