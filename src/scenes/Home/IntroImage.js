import React from 'react';
import { Image } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { useMapper } from 'reactponsive';

import introSmImgSrc from './nido-laser-sm.jpg';
import introImgSrc from './nido-laser.jpg';

const SImage = styled(Image)`
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
`;

const Home = () => {
  const introImg = useMapper({
    default: introSmImgSrc,
    md: introSmImgSrc,
    lg: introImgSrc,
  });
  return (
    <SImage
      src={introImg}
      alt="Cortadora láser Nido Robotics"
      objectFit="cover"
      objectPosition="center center"
      position={['absolute', 'absolute', 'relative']}
      top={0}
      height={['100%', '100%', '656px']}
      width="full"
      maxWidth="100%"
    />
  );
};

export default Home;
