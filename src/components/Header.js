import React from 'react';
import { HStack } from '@chakra-ui/react';
import { Logo } from './Logo';
import { Auth } from './Auth';

export const Header = () => {

  return (
    <HStack px='14' width='100%' justify='space-between'>
      <Logo />
      <Auth />
    </HStack>
  );
};

