import React from 'react';
import { and, prop } from 'ramda';
import { FastField } from 'formik';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/core';
import PT from 'prop-types';
import FormInput from './FormInput';

const FormGroup = ({
  name,
  label,
  touched,
  errors,
  isRequired,
  children,
  component,
  ...rest
}) => {
  const errorMsg = prop(name, errors);
  const isInvalid = and(prop(name, touched), errorMsg);
  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired} {...rest}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <FastField name={name} component={children ? undefined : component}>
        {children}
      </FastField>
      {isInvalid && (
        <FormErrorMessage id="name-helper-text">{errorMsg}</FormErrorMessage>
      )}
    </FormControl>
  );
};

FormGroup.defaultProps = {
  isRequired: true,
  children: undefined,
  component: FormInput,
};

FormGroup.propTypes = {
  name: PT.string.isRequired,
  label: PT.string.isRequired,
  touched: PT.objectOf(PT.bool).isRequired,
  errors: PT.objectOf(PT.string).isRequired,
  isRequired: PT.bool,
  children: PT.func,
  component: PT.func,
};

export default FormGroup;
