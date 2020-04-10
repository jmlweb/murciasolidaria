import React from 'react';
import { Heading, Button, Stack } from '@chakra-ui/core';
import PT from 'prop-types';

const IntroBox = ({ title, children, buttons, ...props }) => (
  <Stack
    flex={1}
    p={4}
    bg="gray.50"
    border="1px solid"
    borderColor="gray.200"
    borderRadius="md"
    spacing={4}
    {...props}
  >
    <Heading as="h2" size="lg" fontSize={['24px', '30px']} color="gray.600">
      {title}
    </Heading>
    <Stack spacing={2} flex={1}>
      {children}
      <Stack isInline spacing={2} alignItems="center" mt="auto" pt={4}>
        <Button
          as="a"
          href={buttons.primary.href}
          rel="external"
          target="_blank"
          variantColor="red"
          leftIcon={buttons.primary.icon}
        >
          {buttons.primary.title}
        </Button>
        <Button
          as="a"
          href={buttons.secondary.href}
          variantColor="teal"
          variant="outline"
        >
          {buttons.secondary.title}
        </Button>
      </Stack>
    </Stack>
  </Stack>
);

const buttonVariantType = PT.shape({
  href: PT.string.isRequired,
  title: PT.node.isRequired,
});

IntroBox.propTypes = {
  title: PT.string.isRequired,
  children: PT.node.isRequired,
  buttons: PT.shape({
    primary: buttonVariantType.isRequired,
    secondary: buttonVariantType.isRequired,
  }).isRequired,
};

export default IntroBox;
