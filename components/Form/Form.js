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

  const submit = (e) => {
    e.preventDefault();

    fetch("https://arezef.deta.dev/api/projects", {
      method: "POST",
    }).then((res) => res.json());
  };

  return (
    <Modal isOpen={projectFormIsOpen} onClose={projectFormOnClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add your Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={submit}>
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
                  onChange={(e) => setStars(e.target.value)}
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
                  onClick={submit}
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
