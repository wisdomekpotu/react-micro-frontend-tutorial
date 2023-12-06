import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import CartPage from './Page/CartPage';

export default function App() {
  // Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <CartPage />
    </ChakraProvider>
  );
}
