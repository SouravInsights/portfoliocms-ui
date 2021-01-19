import React from "react";
import { Flex, Container, Image, Stack, Text, Button } from "@chakra-ui/react";

import { FaCog, FaChevronDown } from "react-icons/fa";

import "./Layout.module.scss";

const Header = () => {
  return (
    <Flex
      bg="#red"
      position={{ md: "fixed" }}
      justify="space-between"
      bg="#ffffff"
      minH="4rem"
      w="100%"
      alignItems="center"
      zIndex="99"
    >
      <Container maxW="lg" paddingTop="5px">
        <Stack direction="row" alignItems="center" justify="center">
          <Image
            boxSize="38px"
            fallbackSrc="https://pbs.twimg.com/profile_images/1208495544655474689/p7Y_NPOF_400x400.jpg"
          />
          <Text fontSize="xl" fontWeight="500">
            Portfolio CMS
          </Text>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Header;
