import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import StorePage from './Page/StorePage';

export default function App() {
  // Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <StorePage />
    </ChakraProvider>
  );
}
