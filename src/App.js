import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { guestRouter } from 'src/routes';
import { RouterProvider } from 'react-router';

const App = () => (
  <ChakraProvider theme={theme} resetCSS>
    <RouterProvider router={guestRouter} />
  </ChakraProvider>
);

export default App;
