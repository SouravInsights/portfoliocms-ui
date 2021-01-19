import Head from "next/head";
import React, { useState } from "react";
import { ChakraProvider, Box, Select, Flex, Text } from "@chakra-ui/react";

import theme from "../styles/theme";

import { Dashboard } from "../components/Dashboard";
import { Projects } from "../components/Projects";
import { Header, Footer } from "../components/Layout";

function App() {
  const [preview, setPreview] = useState("dashboard");

  const changePreview = (e) => {
    setPreview(e.target.value);
  };
  let defaultComponent;
  const previewComponent = () => {
    switch (preview) {
      case "dashboard":
        defaultComponent = <Dashboard />;
        break;
      case "projects":
        defaultComponent = <Projects />;
        break;
    }
    return defaultComponent;
  };
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box
        position="absolute"
        bg="#ffffff"
        borderWidth="1px"
        borderColor="#cccccc"
        bottom="30%"
        zIndex="10"
        p={4}
      >
        <Text fontWeight="500">Preview:</Text>
        <Select onChange={changePreview}>
          <option selected value="dashboard">
            Dashboard
          </option>
          <option value="projects">Table</option>
        </Select>
      </Box>
      {previewComponent()}

      <Footer />
    </ChakraProvider>
  );
}

export default App;
