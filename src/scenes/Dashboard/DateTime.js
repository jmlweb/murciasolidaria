import React from 'react';
import { Box, Stack } from '@chakra-ui/core';
import PT from 'prop-types';

function toDateTime(secs) {
  const t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t;
}

const DateTime = ({ seconds, ...props }) => {
  const dateTime = toDateTime(seconds);
  return (
    <Stack isInline spacing={1} alignItems="center" {...props}>
      <Box fontWeight="bold" color="gray.500" fontSize="sm">
        {dateTime.toLocaleDateString('es-ES')}
      </Box>
      <Box fontSize="xs" pt="0.2rem">
        {dateTime.toLocaleTimeString()}
      </Box>
    </Stack>
  );
};

DateTime.propTypes = {
  seconds: PT.number.isRequired,
};

export default DateTime;
