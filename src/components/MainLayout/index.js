import React from 'react';
import { Box, Grid } from '@chakra-ui/core';
import PT from 'prop-types';

import MainHeader from '../MainHeader';
import MainFooter from '../MainFooter';

const HeaderContentLayout = ({ children }) => (
  <Grid
    gridTemplateRows="auto 1fr auto"
    gridTemplateColumns="1fr"
    minHeight="100%"
  >
    <MainHeader />
    <Box as="main">{children}</Box>
    <MainFooter />
  </Grid>
);

HeaderContentLayout.propTypes = {
  children: PT.node.isRequired,
};

export default HeaderContentLayout;
