import React, { useRef } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Select,
  Flex,
  Stack,
  Input,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const Form = ({ projectFormIsOpen, projectFormOnClose }) => {
  const [title, setTitle] = React.useState("");
  const [stars, setStars] = React.useState("");
  const [category, setCategory] = React.useState("");

  const saveProject = () => {
    fetch("https://arezef.deta.dev/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        stars: stars,
        category: category,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log("error"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveProject(); // Save project when form is submitted
  };

  return (
    <Modal isOpen={projectFormIsOpen} onClose={projectFormOnClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add your Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl as="fieldset">
              <Stack>
                <FormLabel>Project Name</FormLabel>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {console.log(title)}
                <FormLabel>Stars</FormLabel>
                <Textarea
                  placeholder="Project Stars"
                  value={stars}
                  onChange={(e) => setStars(parseInt(e.target.value))}
                />
                {console.log(stars)}
                <FormLabel>Category</FormLabel>
                <Textarea
                  placeholder="Category of the Project"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                {console.log(category)}
              </Stack>
              <Flex pt="14px" pb="8px" justify="center">
                <Button
                  size="lg"
                  backgroundColor="blue.500"
                  color="#ffffff"
                  _hover={{ bg: "blue.200" }}
                  onClick={handleSubmit}
                >
                  Add this Project
                </Button>
              </Flex>
            </FormControl>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Form;
