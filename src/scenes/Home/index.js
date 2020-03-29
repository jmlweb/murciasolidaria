import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';

import { Container, MainLayout } from '../../components';
import RequestForm from './RequestForm';

const Home = () => (
  <MainLayout>
    <Container>
      <Tabs variant="soft-rounded" variantColor="cyan" align="center" mt="4">
        <TabList>
          <Tab>Solicitar material</Tab>
          <Tab>Donar material</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={3}>
            <RequestForm />
          </TabPanel>
          <TabPanel>
            <div>Donar material</div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  </MainLayout>
);

export default Home;
