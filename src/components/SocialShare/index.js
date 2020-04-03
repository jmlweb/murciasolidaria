import React from 'react';
import { Button, Box, Text, Stack } from '@chakra-ui/core';
import { FaTwitter, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import PT from 'prop-types';

// Thanks to https://github.com/SaraVieira/react-social-sharing
const SOCIAL_LINKS = {
  twitter: (link = '', message = '') =>
    `https://twitter.com/intent/tweet/?text=${encodeURIComponent(
      message,
    )}&url=${encodeURIComponent(link)}`,
  facebook: (link = '') =>
    `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
  whatsapp: (link = '', message = '') =>
    `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message,
    )}%20${encodeURIComponent(link)}`,
};

const SocialButton = ({ type, name, icon }) => {
  const title = `Compartir en ${name}`;

  return (
    <Button
      as="a"
      variantColor={type}
      aria-label={title}
      title={title}
      href={SOCIAL_LINKS[type]('https://murciasolidaria.com/')}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Box as={icon} display="inline-block" mr={1} />
      {name}
    </Button>
  );
};

SocialButton.propTypes = {
  type: PT.string.isRequired,
  name: PT.string.isRequired,
  icon: PT.elementType.isRequired,
};

const SocialShare = () => (
  <Box pt={8} my={8} borderTop="1px solid" borderColor="gray.200">
    <Text width="full" textAlign="center" pb={4}>
      Compartir:
    </Text>
    <Stack isInline justifyContent="center" spacing={[2, 6, 8]}>
      <SocialButton type="twitter" name="Twitter" icon={FaTwitter} />
      <SocialButton type="facebook" name="Facebook" icon={FaFacebook} />
      <SocialButton type="whatsapp" name="Whatsapp" icon={FaWhatsapp} />
    </Stack>
  </Box>
);

export default SocialShare;
