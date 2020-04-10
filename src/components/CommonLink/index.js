import React from 'react';
import { Link } from '@chakra-ui/core';
import PT from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const StyledLink = (props) => <Link color="teal.500" {...props} />;

const CommonLink = ({ href, isExternal, children, ...props }) => (
  <StyledLink href={href} isExternal={isExternal} {...props}>
    {children}
  </StyledLink>
);

export const CommonInternalLink = (props) => (
  <StyledLink as={RouterLink} {...props} />
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
