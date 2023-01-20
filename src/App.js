import React from 'react';
import { ChakraProvider, theme, } from '@chakra-ui/react';

const App = () => <ChakraProvider theme={theme} resetCSS></ChakraProvider>;

export default App;
