import React from 'react';
import { RouterProvider } from 'react-router';
import { ChakraProvider, theme, VStack, Divider } from '@chakra-ui/react';
import { router } from 'src/routes';
import { GoogleAuth } from 'src/hoc/GoogleAuth';
import { Header } from 'src/components/Header';

const App = () => (
  <ChakraProvider theme={theme} resetCSS>
    <GoogleAuth>
      <VStack h='100%'>
        <Header />
        <Divider />
        <RouterProvider router={router} />
      </VStack>
    </GoogleAuth>
  </ChakraProvider>
);

export default App;
