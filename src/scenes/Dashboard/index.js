import React, { useMemo } from 'react';
import { useFirestore, useFirestoreCollection } from 'reactfire';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';

import { Container, MainLayout } from '../../components';
import { useAlertNotification, useErrorNotifier } from '../../hooks';
import DataTable from './DataTable';

const Dashboard = () => {
  const errorNotifier = useErrorNotifier({
    severity: 'error',
    component: 'dashboard',
  });
  const firestore = useFirestore();
  const { docs } = useFirestoreCollection(
    firestore
      .collection('material-requests')
      .limit(100)
      .orderBy('createdAt', 'desc'),
  );
  const materialRequests = useMemo(
    () =>
      docs.map((item) => ({
        id: item.id,
        ...item.data(),
        update: item.update,
      })),
    [docs],
  );
  const notify = useAlertNotification({
    title: 'Ha habido un problema al actualizar el estado.',
  });
  const createUpdateFn = (id) => async (newValues) => {
    const ref = firestore.collection('material-requests').doc(id);
    try {
      return await ref.update(newValues);
    } catch (e) {
      notify({
        description: e.message,
      });
      errorNotifier(e);
    }
    return false;
  };
  const deleteFn = (id) => async () => {
    const ref = firestore.collection('material-requests').doc(id);
    try {
      return await ref.delete();
    } catch (e) {
      notify({
        description: e.message,
      });
      errorNotifier(e);
    }
    return false;
  };
  return (
    <MainLayout>
      <Container>
        <Tabs variant="soft-rounded" variantColor="teal">
          <TabList mb={4}>
            <Tab>Activos</Tab>
            <Tab>Inactivos</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <DataTable
                materialRequests={materialRequests}
                createStatusUpdateFn={createUpdateFn}
              />
            </TabPanel>
            <TabPanel>
              <DataTable
                materialRequests={materialRequests}
                createStatusUpdateFn={createUpdateFn}
                showInactive
                deleteFn={deleteFn}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </MainLayout>
  );
};

export default Dashboard;
