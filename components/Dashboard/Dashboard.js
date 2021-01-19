import React from "react";
import { Image, Heading, Text } from "@chakra-ui/react";
import { PageContainer, PageContent } from "../Layout";

export default function Dashboard() {
  return (
    <PageContainer isFixedNav>
      <PageContent>
        <Image
          boxSize="260px"
          mx="auto"
          src="https://res.cloudinary.com/emishalabs/image/upload/v1611040377/PortfolioCMS/Welcome_dfzeb3.png"
        />
        <Heading
          align="center"
          fontWeight="extrabold"
          fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
        >
          Welcome to{" "}
          <Text as="span" color="main.600">
            Portfolio CMS!
          </Text>
        </Heading>
      </PageContent>
    </PageContainer>
  );
}
