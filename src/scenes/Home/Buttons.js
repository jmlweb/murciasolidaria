import React, { memo } from 'react';
import { Box, Button, Flex } from '@chakra-ui/core';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FiAlertOctagon } from 'react-icons/fi';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AuthCheck } from 'reactfire';
import PT from 'prop-types';

const Buttons = ({ onClick }) => (
  <Flex justifyContent="center" mb={8}>
    <AuthCheck
      fallback={
        <Button size="lg" onClick={onClick} variantColor="red">
          <Box as={AiOutlineGoogle} display="inline-block" mr={1} />
          Accede para solicitar pantallas
        </Button>
      }
    >
      <Button
        size="lg"
        as={ReactRouterLink}
        to="/request-material"
        variantColor="teal"
      >
        <Box as={FiAlertOctagon} display="inline-block" mr={1} />
        Solicitar pantallas
      </Button>
    </AuthCheck>
  </Flex>
);

Buttons.propTypes = {
  onClick: PT.func.isRequired,
};

export default memo(Buttons);
