import React, { memo } from 'react';
import { Image } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { useMapper } from 'reactponsive';

const desktopImg =
  'https://res.cloudinary.com/murciasolidaria/image/upload/f_auto,fl_progressive/v1585682634/nido-laser_wtpmaq.jpg';
const mobileImg =
  'https://res.cloudinary.com/murciasolidaria/image/upload/c_scale,f_auto,fl_progressive,w_509/v1585682634/nido-laser-sm_m0xlek.jpg';

const SImage = styled(Image)`
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
`;

const IntroImage = () => {
  const introImg = useMapper({
    default: mobileImg,
    lg: desktopImg,
  });
  return (
    <SImage
      src={introImg}
      alt="Cortadora láser Nido Robotics"
      objectFit="cover"
      objectPosition="center center"
      position="absolute"
      top={0}
      height="100%"
      width="full"
      maxWidth="100%"
    />
  );
};

export default memo(IntroImage);
