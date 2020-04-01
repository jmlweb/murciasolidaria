import React from 'react';
import { Image, SimpleGrid } from '@chakra-ui/core';
import PT from 'prop-types';

import Container from '../Container';

export const MaskGallery = ({ maxColumns }) => (
  <Container>
    <SimpleGrid columns={[1, 2, 2, maxColumns]} spacing={8}>
      <Image
        src="https://res.cloudinary.com/murciasolidaria/image/upload/c_fill,e_auto_brightness,f_auto,fl_progressive,g_auto:face,h_368,w_492/v1585754442/WhatsApp_Image_2020-03-30_at_11.13.18_vnsmxe.jpg"
        alt=""
      />
      <Image
        src="https://res.cloudinary.com/murciasolidaria/image/upload/c_fill,e_auto_brightness,f_auto,fl_progressive,g_auto:face,h_368,w_492/v1585754438/WhatsApp_Image_2020-03-30_at_11.13.32_xulkuj.jpg"
        alt=""
      />
      <Image
        src="https://res.cloudinary.com/murciasolidaria/image/upload/c_fill,e_auto_brightness,f_auto,fl_progressive,g_auto:face,h_368,w_492/v1585754421/WhatsApp_Image_2020-03-30_at_21.59.22_luokzh.jpg"
        alt=""
      />
      <Image
        src="https://res.cloudinary.com/murciasolidaria/image/upload/c_fill,e_auto_brightness,f_auto,fl_progressive,g_auto:face,h_368,w_492/v1585781473/WhatsApp_Image_2020-03-30_at_21.49.46_qseyuz.jpg"
        alt=""
      />
    </SimpleGrid>
  </Container>
);

MaskGallery.defaultProps = {
  maxColumns: 4,
};

MaskGallery.propTypes = {
  maxColumns: PT.number,
};

export default MaskGallery;
