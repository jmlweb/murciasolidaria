import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/core';
import PT from 'prop-types';

const getStep = (value) => {
  if (value < 10) {
    return 1;
  }
  if (value < 50) {
    return 5;
  }
  if (value < 100) {
    return 10;
  }
  if (value < 200) {
    return 50;
  }
  return 100;
};

const FormNumeric = ({ field, form, min, max }) => {
  const step = getStep(field.value);
  return (
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
};

FormNumeric.defaultProps = {
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
  min: PT.number,
  max: PT.number,
};

export default FormNumeric;
