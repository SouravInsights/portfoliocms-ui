import Head from "next/head";
import React, { useState } from "react";
import { ChakraProvider, Box, Select, Flex, Text } from "@chakra-ui/react";

import theme from "../styles/theme";

import { Dashboard } from "../components/Dashboard";
import { Projects } from "../components/Projects";
import { Header, Footer } from "../components/Layout";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Dashboard />
      <Projects />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
