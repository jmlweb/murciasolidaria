import React from 'react';
import { Image } from '@chakra-ui/core';

import { useMapper } from 'reactponsive';

import introSmImgSrc from './nido-laser-sm.jpg';
import introImgSrc from './nido-laser.jpg';

const Home = () => {
  const introImg = useMapper({
    default: introSmImgSrc,
    md: introSmImgSrc,
    lg: introImgSrc,
  });
  return (
    <Image
      src={introImg}
      alt="Cortadora láser Nido Robotics"
      objectFit="cover"
      objectPosition="center center"
      position={['absolute', 'absolute', 'relative']}
      top={0}
      height={['100%', '100%', 'auto']}
    />
  );
};

export default Home;
