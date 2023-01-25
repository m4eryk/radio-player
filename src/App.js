import React from 'react';
import { RouterProvider } from 'react-router';
import { ChakraProvider, theme, VStack, Divider } from '@chakra-ui/react';
import { router } from 'src/routes';
import { GoogleAuth } from 'src/hoc/GoogleAuth';
import { Header } from 'src/components/Header';
import { RadioStations } from 'src/hoc/RadioStations.js';

const App = () => (
  <ChakraProvider theme={theme} resetCSS>
    <GoogleAuth>
      <VStack h='100%'>
        <Header />
        <Divider />
        <RadioStations>
          <RouterProvider router={router} />
        </RadioStations>
      </VStack>
    </GoogleAuth>
  </ChakraProvider>
);

export default App;
