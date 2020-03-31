import React, { useMemo } from 'react';
import { useFirestore, useFirestoreCollection } from 'reactfire';
import { Box, Flex } from '@chakra-ui/core';

import { CommonLink, Container, MainLayout } from '../../components';
import { useAlertNotification } from '../../hooks';
import DateTime from './DateTime';
import PriorityTag from './PriorityTag';
import { THead, TBody, Tr, Th, Td } from './styled';
import StatusesSelector from './StatusesSelector';

const FORBIDEN_STATUSES = ['cancelled', 'rejected', 'sent'];

const Dashboard = () => {
  const firestore = useFirestore();
  const { docs } = useFirestoreCollection(
    firestore
      .collection('material-requests')
      .orderBy('createdAt', 'desc')
      .limit(999),
  );
  const materialRequests = useMemo(
    () =>
      docs
        .map((item) => ({
          id: item.id,
          ...item.data(),
          update: item.update,
        }))
        .filter((item) => !FORBIDEN_STATUSES.includes(item.status)),
    [docs],
  );
  const notify = useAlertNotification({
    title: 'Ha habido un problema al actualizar el estado.',
  });
  const createStatusUpdateFn = (id) => async (newStatus) => {
    const ref = firestore.collection('material-requests').doc(id);
    try {
      await ref.update({
        status: newStatus,
      });
    } catch (e) {
      notify({
        description: e.message,
      });
    }
  };
  return (
    <MainLayout>
      <Container>
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
          <Box
            as="table"
            width="full"
            table-layout="auto"
            border-collapse="collapse"
          >
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
              {materialRequests.map((item) => (
                <Tr key={`${item.uid}${item.createdAt.seconds}`}>
                  <Td fontSize="sm">
                    <DateTime seconds={item.createdAt.seconds} />
                  </Td>
                  <Td>{item.name}</Td>
                  <Td fontSize="sm">
                    <CommonLink
                      title="Enviar email"
                      href={`mailto:${item.email}`}
                    >
                      {item.email}
                    </CommonLink>
                  </Td>
                  <Td fontSize="sm">{item.phone}</Td>
                  <Td>{item.org}</Td>
                  <Td textAlign="center">{item.qty}</Td>
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
              ))}
            </TBody>
          </Box>
        </Flex>
      </Container>
    </MainLayout>
  );
};

export default Dashboard;
