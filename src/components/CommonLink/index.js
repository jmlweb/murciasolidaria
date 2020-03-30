import React from 'react';
import { Link } from '@chakra-ui/core';
import PT from 'prop-types';

const CommonLink = ({ href, isExternal, children }) => (
  <Link href={href} isExternal={isExternal} color="teal.500">
    {children}
  </Link>
);

CommonLink.defaultProps = {
  isExternal: true,
};

CommonLink.propTypes = {
  href: PT.string.isRequired,
  isExternal: PT.bool,
  children: PT.node.isRequired,
};

export default CommonLink;
