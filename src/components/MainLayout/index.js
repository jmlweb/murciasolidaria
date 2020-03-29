import React from 'react';
import { Grid } from '@chakra-ui/core';
import PT from 'prop-types';

import MainHeader from '../MainHeader';

const HeaderContentLayout = ({ children }) => (
  <Grid gridTemplateRows="auto 1fr" gridTemplateColumns="1fr" minHeight="100vh">
    <MainHeader />
    <main>{children}</main>
  </Grid>
);

HeaderContentLayout.propTypes = {
  children: PT.node.isRequired,
};

export default HeaderContentLayout;
