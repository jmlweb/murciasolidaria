import React from 'react';
import { Checkbox } from '@chakra-ui/core';
import PT from 'prop-types';
import { FastField } from 'formik';

const FormCheckbox = ({ children, name }) => (
  <FastField name={name}>
    {({ field, form }) => (
      <Checkbox
        id={name}
        {...field}
        checked={field.value === true}
        onChange={() => {
          form.setFieldValue(name, !field.value);
        }}
      >
        {children}
      </Checkbox>
    )}
  </FastField>
);

FormCheckbox.propTypes = {
  children: PT.node.isRequired,
  name: PT.string.isRequired,
};

export default FormCheckbox;
