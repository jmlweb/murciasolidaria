import React, { Children } from 'react';
import { Provider } from 'reactponsive';
import { useTheme } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { map, pipe, pick, prop } from 'ramda';

const extractAlias = pipe(
  pick(['sm', 'md', 'lg', 'xl']),
  map((x) => `(min-width: ${x})`),
);

const useAlias = pipe(useTheme, prop('breakpoints'), extractAlias);

const ResponsiveProvider = ({ children }) => {
  const alias = useAlias();
  return <Provider alias={alias}>{Children.only(children)}</Provider>;
};

ResponsiveProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResponsiveProvider;
