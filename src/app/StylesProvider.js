import React, { Children } from 'react';
import PT from 'prop-types';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import theme from '../theme';

const StylesProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {Children.only(children)}
  </ThemeProvider>
);

StylesProvider.propTypes = {
  children: PT.node.isRequired,
};

export default StylesProvider;
