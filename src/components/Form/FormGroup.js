import React from 'react';
import { and, prop } from 'ramda';
import { FastField } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/core';
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
  helperText,
  placeholder,
  ...rest
}) => {
  const errorMsg = prop(name, errors);
  const isInvalid = and(prop(name, touched), errorMsg);
  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired} {...rest}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <FastField
        name={name}
        component={children ? undefined : component}
        placeholder={placeholder}
      >
        {children}
      </FastField>
      {helperText && (
        <FormHelperText id={`${name}-helper-text`}>{helperText}</FormHelperText>
      )}
      {isInvalid && (
        <FormErrorMessage id={`${name}-error-text`}>
          {errorMsg}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

FormGroup.defaultProps = {
  isRequired: true,
  children: undefined,
  component: FormInput,
  helperText: undefined,
  placeholder: undefined,
};

FormGroup.propTypes = {
  name: PT.string.isRequired,
  label: PT.string.isRequired,
  touched: PT.objectOf(PT.bool).isRequired,
  errors: PT.objectOf(PT.string).isRequired,
  isRequired: PT.bool,
  children: PT.func,
  component: PT.func,
  helperText: PT.string,
  placeholder: PT.string,
};

export default FormGroup;
