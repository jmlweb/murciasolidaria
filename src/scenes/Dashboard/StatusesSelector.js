import React from 'react';
import PT from 'prop-types';
import { Select } from '@chakra-ui/core';

import { REQUEST_STATUSES } from '../../constants';

const options = Object.keys(REQUEST_STATUSES).map((key) => ({
  label: REQUEST_STATUSES[key],
  value: key,
}));

const StatusesSelector = ({ status, updateFn }) => {
  const onChange = (e) => {
    updateFn(e.target.value);
  };
  return (
    <Select defaultValue={status} onChange={onChange}>
      {options.map(({ label, value }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </Select>
  );
};

StatusesSelector.defaultProps = {
  status: 'requested',
};

StatusesSelector.propTypes = {
  status: PT.oneOf(Object.keys(REQUEST_STATUSES)),
  updateFn: PT.func.isRequired,
};

export default StatusesSelector;
