import React from "react";
import { Flex } from "@chakra-ui/react";

import "./Layout.module.scss";

const PageContainer = ({ isFixedNav, children }) => {
  return (
    <Flex
      bg="secondary.background"
      minHeight="100%"
      alignItems="center"
      justifyContent="top"
      flexDirection="column"
      paddingTop={isFixedNav ? { md: "4rem" } : "0"}
    >
      {children}
    </Flex>
  );
};

export default PageContainer;
