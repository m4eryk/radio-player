import React from 'react';
import { Avatar, Box, Button, Text } from '@chakra-ui/react';
import { useAuth } from 'src/hooks/useGoogleAuth';

export const Auth = () => {
  const { signIn, user } = useAuth();

  return (
    <Box display='flex' alignItems='center'>
      {!user && <Button onClick={signIn}>Login</Button>}
      {user && (<>
        <Avatar
          borderRadius='full'
          borderColor='green.400'
          mr='4'
          src={user?.photoURL}
          showBorder
        />
        <Text>
          {user?.displayName}
        </Text>
      </>)}
    </Box>
  );
};
