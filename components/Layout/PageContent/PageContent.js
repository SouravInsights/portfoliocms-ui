import React from "react";
import { Container, Box, Flex, Heading, Button } from "@chakra-ui/react";

const PageContent = ({
  title = "",
  label,
  buttonOn,
  onClick = "",
  children,
}) => {
  return (
    <Box paddingTop="1.5rem">
      <Flex justify="space-between" mb="1.5rem">
        <Heading size="lg">{title}</Heading>
        {buttonOn === true ? (
          <Button onClick={onClick} colorScheme="main" size="sm">
            {label}
          </Button>
        ) : (
          ""
        )}
      </Flex>
      {children}
    </Box>
  );
};

export default PageContent;
