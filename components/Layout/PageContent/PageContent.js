import React from "react";
import { Container, Box, Flex, Heading, Button } from "@chakra-ui/react";

const PageContent = ({
  title = "",
  label = "Primary Button",
  onClick = "",
  children,
}) => {
  return (
    <Box paddingTop="1.5rem" h="400px" w="60%">
      <Flex alignItems="center" justify="space-between" mb="1.5rem">
        <Heading size="lg">{title}</Heading>
        <Button onClick={onClick} colorScheme="main" size="sm">
          {label}
        </Button>
      </Flex>
      {children}
    </Box>
  );
};

export default PageContent;
