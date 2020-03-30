import React from 'react';
import { Select } from '@chakra-ui/core';
import PT from 'prop-types';
import { ifElse, identity, is, prop } from 'ramda';

const getOptKey = (key) => ifElse(is(String), identity, prop(key));

const FormSelectOption = ({ opt }) => {
  const value = getOptKey('value')(opt);
  const label = getOptKey('label')(opt);
  return <option value={value}>{label}</option>;
};

FormSelectOption.propTypes = {
  opt: PT.oneOfType([
    PT.string,
    PT.shape({
      value: PT.string.isRequired,
      label: PT.string.isRequired,
    }),
  ]).isRequired,
};

const FormSelect = ({ field, options }) => (
  <Select
    id={field.name}
    {...field}
    aria-describedby={`${field.name}-helper-text`}
  >
    {options.map((opt) => (
      <FormSelectOption key={getOptKey('value')(opt)} opt={opt} />
    ))}
  </Select>
);

FormSelect.propTypes = {
  field: PT.shape({
    name: PT.string.isRequired,
  }).isRequired,
  options: PT.arrayOf(
    PT.oneOfType([
      PT.string,
      PT.shape({
        value: PT.string.isRequired,
        label: PT.string.isRequired,
      }),
    ]).isRequired,
  ).isRequired,
};

export default FormSelect;
