import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/core';
import PT from 'prop-types';

const FormNumeric = ({ field, form, step, min, max }) => (
  <NumberInput
    value={field.value}
    onChange={(value) => {
      if (value !== form.values[field.name]) {
        form.setFieldValue(field.name, value);
      }
    }}
    clampValueOnBlur={false}
    step={step}
    min={min}
    max={max}
  >
    <NumberInputField
      id={field.name}
      aria-describedby={`${field.name}-helper-text`}
      {...field}
    />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
);

FormNumeric.defaultProps = {
  step: undefined,
  min: undefined,
  max: undefined,
};

FormNumeric.propTypes = {
  field: PT.shape({
    value: PT.number.isRequired,
    name: PT.string.isRequired,
  }).isRequired,
  form: PT.shape({
    values: PT.objectOf(PT.oneOfType([PT.string, PT.number])).isRequired,
    setFieldValue: PT.func.isRequired,
  }).isRequired,
  step: PT.number,
  min: PT.number,
  max: PT.number,
};

export default FormNumeric;
