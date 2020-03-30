import React from 'react';
import { Box } from '@chakra-ui/core';
import PT from 'prop-types';

import logoSrc from './logo.svg';

const WIDTHS = {
  sm: ['150px', '150px', '180px'],
  md: ['210px', '210px', '300px'],
};

const Logo = ({ size }) => <Box as="img" width={WIDTHS[size]} src={logoSrc} />;

Logo.defaultProps = {
  size: 'md',
};

Logo.propTypes = {
  size: PT.oneOf(['sm', 'md']),
};

export default Logo;
