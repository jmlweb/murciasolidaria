import React from 'react';
import PT from 'prop-types';
import { Box, Flex, Heading } from '@chakra-ui/core';

const FormCard = ({ title, children, icon, ...classNames }) => (
  <Box
    bg="gray.50"
    flex={1}
    px={[3, 4]}
    py={[5, 6]}
    borderRadius="md"
    border="1px solid"
    borderColor="gray.100"
    {...classNames}
  >
    <Heading
      size="md"
      fontSize={['16px', '18px']}
      mb={5}
      as={Flex}
      alignItems="center"
      color="gray.600"
    >
      <Box as={icon} mr={1} size="16px" display="inline-block" /> {title}
    </Heading>
    {children}
  </Box>
);

FormCard.propTypes = {
  title: PT.string.isRequired,
  children: PT.node.isRequired,
  icon: PT.func.isRequired,
};

export default FormCard;
