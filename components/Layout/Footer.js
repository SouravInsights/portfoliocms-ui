import React from "react";
import { Stack, Flex, Link, Text } from "@chakra-ui/react";

import "./Layout.module.scss";

const Footer = () => {
  return (
    <Flex
      w="100%"
      marginTop="auto"
      pt="1.5rem"
      pb="1.5rem"
      alignItems="center"
      justify="center"
    >
      <Stack
        direction={["row", "row", "row", "row"]}
        justifyContent="space-between"
        fontWeight="500"
        fontSize="sm"
      >
        <Text color="secondary.link">&copy; 2020</Text>
        <Link href="#" color="secondary.link" fontWeight="bold">
          Portfolio CMS
        </Link>
        <Text color="secondary.link">&mdash; All rights reserved</Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
