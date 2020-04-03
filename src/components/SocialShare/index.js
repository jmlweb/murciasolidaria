import React from 'react';
import { Button, Box, Text, Stack } from '@chakra-ui/core';
import { FaTwitter, FaWhatsapp, FaFacebook } from 'react-icons/fa';

// Thanks to https://github.com/SaraVieira/react-social-sharing for the link and inspiration
const SOCIAL_NETWORKS = {
  twitter: {
    url: (link = '', message = '') =>
      `https://twitter.com/intent/tweet/?text=${encodeURIComponent(
        message,
      )}&url=${encodeURIComponent(link)}`,
    icon: FaTwitter,
    name: 'Twitter',
  },
  facebook: {
    url: (link = '') =>
      `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
    icon: FaFacebook,
    name: 'Facebook',
  },
  whatsapp: {
    url: (link = '', message = '') =>
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        message,
      )}%20${encodeURIComponent(link)}`,
    icon: FaWhatsapp,
    name: 'WhatsApp',
  },
};

const SocialShare = () => (
  <Box pt={8} my={8} borderTop="1px solid" borderColor="gray.200">
    <Text width="full" textAlign="center" pb={4}>
      Compartir también es ayudar:
    </Text>
    <Stack isInline justifyContent="center" spacing={[2, 6, 8]}>
      {Object.entries(SOCIAL_NETWORKS).map(([network, { name, icon, url }]) => {
        const title = `Compartir en ${name}`;

        return (
          <Button
            as="a"
            variantColor={network}
            aria-label={title}
            title={title}
            href={url(
              'https://murciasolidaria.com/',
              'La iniciativa "Murcia solidaria" crea material de protección sanitario contra el Coronavirus ¿Conoces a alguien que lo necesite? Compartir también es ayudar.',
            )}
            target="_blank"
            rel="noreferrer noopener"
            key={network}
          >
            <Box as={icon} display="inline-block" mr={1} />
            {name}
          </Button>
        );
      })}
    </Stack>
  </Box>
);

export default SocialShare;
