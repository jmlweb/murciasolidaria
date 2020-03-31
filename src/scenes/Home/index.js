import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { MainLayout } from '../../components';
import { useGoogleSignin } from '../../hooks';
import Intro from './Intro';
import Presentation from './Presentation';
import Buttons from './Buttons';

const Home = () => {
  const history = useHistory();
  const goToRequestMaterial = useCallback(
    () => history.push('/request-material'),
    [history],
  );
  const onClick = useGoogleSignin(goToRequestMaterial);
  return (
    <MainLayout>
      <Intro onClick={onClick} />
      <Presentation />
      <Buttons onClick={onClick} />
    </MainLayout>
  );
};

export default Home;
