"use client";

import { ChakraProvider } from "@chakra-ui/react";

const Provider = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default Provider;
