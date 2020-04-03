import React from 'react';
import { Link, Text, Stack } from '@chakra-ui/core';
import { useMapper } from 'reactponsive';

import { CommonInternalLink } from '../CommonLink';
import Container from '../Container';
import Logo from '../Logo';
import SocialShare from '../SocialShare';
import { ROUTES } from '../../constants';

const MainFooter = () => {
  const isInline = useMapper({
    default: false,
    lg: true,
  });
  return (
    <Container as="footer">
      <SocialShare />
      <Stack
        isInline={isInline}
        my={8}
        borderTop="1px solid"
        borderColor="gray.200"
        pt={8}
        justifyContent="space-between"
        alignItems="center"
        width="full"
        spacing={[2, 6, 8]}
      >
        <Link href="/">
          <Logo size="sm" />
        </Link>
        <Stack isInline={isInline} spacing={4} alignItems="center">
          <Text>
            <CommonInternalLink to={ROUTES.legalWarning}>
              Aviso legal
            </CommonInternalLink>
          </Text>
          <Text>
            <CommonInternalLink to={ROUTES.privacy}>
              Política de privacidad
            </CommonInternalLink>
          </Text>
          <Text>
            <CommonInternalLink to={ROUTES.cookies}>
              Política de cookies
            </CommonInternalLink>
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};

export default MainFooter;
