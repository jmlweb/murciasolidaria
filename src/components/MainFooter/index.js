import React from 'react';
import { Flex, Link, Text, Stack } from '@chakra-ui/core';
import { useMapper } from 'reactponsive';

import CommonLink from '../CommonLink';
import Container from '../Container';
import Logo from '../Logo';
import SocialShare from '../SocialShare';

const MainFooter = () => {
  const isInline = useMapper({
    default: false,
    lg: true,
  });
  return (
    <Container as="footer">
      <SocialShare />

      <Flex
        my={8}
        borderTop="1px solid"
        borderColor="gray.200"
        pt={8}
        justifyContent="space-between"
        alignItems="center"
        width="full"
      >
        <Stack
          isInline
          justifyContent="center"
          mt={4}
          mb={10}
          spacing={[2, 6, 8]}
        >
          <Link href="/">
            <Logo size="sm" />
          </Link>
          <Stack isInline={isInline} spacing={4} alignItems="center">
            <Text>
              Organiza:{' '}
              <CommonLink href="https://nidorobotics.com">
                Nido Robotics
              </CommonLink>
            </Text>
            <Text>
              Desarrolla:{' '}
              <CommonLink href="https://jmlweb.es">
                José Manuel Lucas
              </CommonLink>
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Container>
  );
};

export default MainFooter;
