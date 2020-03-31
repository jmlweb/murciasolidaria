import React from 'react';
import { Box } from '@chakra-ui/core';

export const THead = (props) => (
  <Box as="thead" p={4} textAlign="left" {...props} />
);
export const TBody = (props) => <Box as="tbody" p={4} {...props} />;
export const Tr = (props) => <Box as="tr" my={1} {...props} />;
export const Th = (props) => (
  <Box
    as="th"
    p={3}
    borderBottom="1px"
    borderBottomColor="gray.200"
    textAlign="left"
    backgroundColor="gray.700"
    color="white"
    {...props}
  />
);
export const Td = (props) => (
  <Box
    as="td"
    p={3}
    borderBottom="1px"
    borderBottomColor="gray.100"
    textAlign="left"
    {...props}
  />
);
