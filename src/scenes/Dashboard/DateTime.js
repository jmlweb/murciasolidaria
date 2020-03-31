import React from 'react';
import { Box } from '@chakra-ui/core';
import PT from 'prop-types';

function toDateTime(secs) {
  const t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t;
}

const DateTime = ({ seconds }) => {
  const dateTime = toDateTime(seconds);
  return (
    <>
      <Box fontWeight="bold" color="gray.500">
        {dateTime.toLocaleDateString('es-ES')}
      </Box>
      <Box fontSize="xs">{dateTime.toLocaleTimeString()}</Box>
    </>
  );
};

DateTime.propTypes = {
  seconds: PT.number.isRequired,
};

export default DateTime;
