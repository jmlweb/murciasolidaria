import React from 'react';
import PT from 'prop-types';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/core';

const FormPhone = ({ field }) => (
  <InputGroup>
    <InputLeftAddon>+34</InputLeftAddon>
    <Input
      type="tel"
      roundedLeft="0"
      aria-describedby={`${field.name}-helper-text`}
      id={field.name}
      {...field}
    />
  </InputGroup>
);

FormPhone.propTypes = {
  field: PT.shape({
    name: PT.string.isRequired,
  }).isRequired,
};

export default FormPhone;
