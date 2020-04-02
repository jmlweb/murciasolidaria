import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/core';
import PT from 'prop-types';

import { CommonLink } from '../../components';
import DateTime from './DateTime';
import PriorityTag from './PriorityTag';
import { THead, TBody, Tr, Th, Td } from './styled';
import StatusesSelector from './StatusesSelector';
import { REQUEST_STATUSES } from '../../constants';

const FORBIDEN_STATUSES = ['cancelled', 'rejected', 'transferred', 'sent'];

const mustShow = (status, showInactive) =>
  FORBIDEN_STATUSES.includes(status) === showInactive;

const DataTable = ({
  materialRequests,
  createStatusUpdateFn,
  showInactive,
}) => (
  <Flex
    flexDirection="column"
    flex={1}
    maxWidth="100%"
    width="100%"
    overflowX="auto"
    borderRadius={4}
    border="1px"
    borderColor="gray.200"
    boxShadow="0 3px 8px rgba(0, 0, 0, 0.1)"
  >
    <Box as="table" width="full" table-layout="auto" border-collapse="collapse">
      <THead>
        <Tr>
          <Th>Fecha</Th>
          <Th>Nombre</Th>
          <Th>Email</Th>
          <Th>Teléfono</Th>
          <Th>Centro</Th>
          <Th textAlign="center">Cantidad</Th>
          <Th textAlign="center">Prioridad</Th>
          <Th textAlign="center">Estado</Th>
        </Tr>
      </THead>
      <TBody>
        {materialRequests.map(
          (item) =>
            mustShow(item.status, showInactive) && (
              <Tr key={item.id}>
                <Td fontSize="sm">
                  <DateTime seconds={item.createdAt.seconds} />
                </Td>
                <Td>
                  <Box as="strong" fontWeight="600">
                    {item.name}
                  </Box>
                </Td>
                <Td fontSize="sm">
                  <CommonLink
                    title="Enviar email"
                    href={`mailto:${item.email}`}
                  >
                    {item.email}
                  </CommonLink>
                </Td>
                <Td fontSize="sm">
                  <Link href={`tel:${item.phone}`}>{item.phone}</Link>
                </Td>
                <Td>{item.org}</Td>
                <Td textAlign="center">
                  <Box as="strong" color="orange.500">
                    {item.qty}
                  </Box>
                </Td>
                <Td textAlign="center">
                  <PriorityTag priority={item.priority} />
                </Td>
                <Td textAlign="center">
                  <StatusesSelector
                    status={item.status}
                    updateFn={createStatusUpdateFn(item.id)}
                  />
                </Td>
              </Tr>
            ),
        )}
      </TBody>
    </Box>
  </Flex>
);

DataTable.defaultProps = {
  showInactive: false,
};

DataTable.propTypes = {
  materialRequests: PT.arrayOf(
    PT.shape({
      status: PT.oneOf(Object.keys(REQUEST_STATUSES)),
    }),
  ).isRequired,
  createStatusUpdateFn: PT.func.isRequired,
  showInactive: PT.bool,
};

export default DataTable;
