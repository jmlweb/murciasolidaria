import React from 'react';
import { Box, Stack, Link, Grid, IconButton } from '@chakra-ui/core';
import PT from 'prop-types';

import DateTime from './DateTime';
import PriorityTag from './PriorityTag';
import StatusesSelector from './StatusesSelector';
import Comments from './Comments';
import Address from './Address';
import { CommonLink } from '../../components';
import { REQUEST_STATUSES } from '../../constants';

const FORBIDEN_STATUSES = ['cancelled', 'rejected', 'transferred', 'sent'];

const mustShow = (status, showInactive) =>
  FORBIDEN_STATUSES.includes(status) === showInactive;

const DataTable = ({
  materialRequests,
  createStatusUpdateFn,
  showInactive,
  deleteFn,
}) => (
  <Stack spacing={4}>
    {materialRequests.map(
      (item) =>
        mustShow(item.status, showInactive) && (
          <Grid
            templateColumns={`250px 1fr 250px 120px 40px 70px 150px${
              showInactive ? ' 50px' : ''
            }`}
            alignItems="center"
            key={item.id}
            borderBottom="1px"
            borderColor="gray.200"
            pb={4}
          >
            <Box gridColumn="1 / -1">
              <Stack isInline spacing={4} alignItems="center">
                <DateTime seconds={item.createdAt.seconds} />
              </Stack>
            </Box>
            <Box as="strong" fontWeight="600">
              {item.name}
            </Box>
            <Box ml={4}>{item.org}</Box>
            <Box ml={4} overflow="hidden" textOverflow="ellipsis">
              <CommonLink href={`mailto:${item.email}`}>
                {item.email}
              </CommonLink>
            </Box>
            <Box ml={4}>
              <Link href={`tel:${item.phone}`}>{item.phone}</Link>
            </Box>
            <Box ml={4} as="strong" color="orange.500" textAlign="right">
              {item.qty}
            </Box>
            <Box ml={4} textAlign="center">
              <PriorityTag priority={item.priority} />
            </Box>
            <Box ml={4}>
              <StatusesSelector
                status={item.status}
                updateFn={createStatusUpdateFn(item.id)}
              />
            </Box>
            {showInactive && (
              <Box ml={4}>
                <IconButton
                  variantColor="red"
                  aria-label="Borrar solicitud"
                  icon="small-close"
                  onClick={deleteFn(item.id)}
                />
              </Box>
            )}
            <Box gridColumn="1 / -1" mt={2}>
              <Stack spacing={4} isInline>
                <Box>
                  <Address
                    value={item.address}
                    updateFn={createStatusUpdateFn(item.id)}
                  />
                </Box>
                <Box>
                  <Comments
                    value={item.comments}
                    updateFn={createStatusUpdateFn(item.id)}
                  />
                </Box>
              </Stack>
            </Box>
          </Grid>
        ),
    )}
  </Stack>
);

DataTable.defaultProps = {
  showInactive: false,
  deleteFn: undefined,
};

DataTable.propTypes = {
  materialRequests: PT.arrayOf(
    PT.shape({
      status: PT.oneOf(Object.keys(REQUEST_STATUSES)),
    }),
  ).isRequired,
  createStatusUpdateFn: PT.func.isRequired,
  showInactive: PT.bool,
  deleteFn: PT.func,
};

export default DataTable;
