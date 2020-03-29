import React from 'react';

import { MainHeader } from '../../components';
import { HeaderContentLayout } from '../../layouts';

const Home = () => (
  <HeaderContentLayout header={<MainHeader />} content={<div>Home</div>} />
);

export default Home;
