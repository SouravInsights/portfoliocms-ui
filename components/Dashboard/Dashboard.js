import React from "react";
import { Image, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { PageContainer, PageContent } from "../Layout";
import Form from "../Form/Form";

export default function Dashboard() {
  const {
    isOpen: projectFormIsOpen,
    onOpen: projectFormOnOpen,
    onClose: projectFormOnClose,
  } = useDisclosure();

  return (
    <PageContainer isFixedNav>
      <PageContent
        title="Dashboard"
        label="Add Project"
        onClick={projectFormOnOpen}
      >
        <Form
          projectFormIsOpen={projectFormIsOpen}
          projectFormOnClose={projectFormOnClose}
        />
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
