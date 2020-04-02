import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { MainLayout, MaskGallery } from '../../components';
import { useGoogleSignin, useLogPage } from '../../hooks';
import Intro from './Intro';
import Buttons from './Buttons';
import Target from './Target';

const Home = () => {
  const history = useHistory();
  useLogPage();
  const goToRequestMaterial = useCallback(
    () => history.push('/solicitar-material'),
    [history],
  );
  const onClick = useGoogleSignin(goToRequestMaterial);
  return (
    <MainLayout>
      <Intro onClick={onClick} />
      <Target />
      <Buttons onClick={onClick} />
      <MaskGallery />
    </MainLayout>
  );
};

export default Home;
