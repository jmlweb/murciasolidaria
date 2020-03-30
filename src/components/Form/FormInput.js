import React from 'react';
import { Input } from '@chakra-ui/core';
import PT from 'prop-types';

const FormInput = ({ field }) => (
  <Input
    id={field.name}
    {...field}
    aria-describedby={`${field.name}-helper-text`}
  />
);

FormInput.propTypes = {
  field: PT.shape({
    name: PT.string.isRequired,
  }).isRequired,
};

export default FormInput;
