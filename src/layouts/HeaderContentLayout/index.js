import React from 'react';
import { Grid } from '@chakra-ui/core';
import PT from 'prop-types';

const HeaderContentLayout = ({ header, content }) => (
  <Grid gridTemplateRows="auto 1fr" gridTemplateColumns="1fr" minHeight="100vh">
    {header}
    {content}
  </Grid>
);

HeaderContentLayout.propTypes = {
  header: PT.node.isRequired,
  content: PT.node.isRequired,
};

export default HeaderContentLayout;
