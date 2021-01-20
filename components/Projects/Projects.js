import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { PageContainer, PageContent, Table } from "../Layout";
import useFetch from "../../hooks/useFetch";
import Form from "../Form/Form";

export default function Projects() {
  let headers = [
    {
      id: "id",
      title: "ID",
    },
    {
      id: "title",
      title: "Title",
    },
    {
      id: "stars",
      title: "Stars",
    },
    {
      id: "category",
      title: "Category",
    },
    {
      id: "created_at",
      title: "Created At",
    },
    {
      id: "updated_at",
      title: "Updated At",
    },
  ];

  const {
    isOpen: projectFormIsOpen,
    onOpen: projectFormOnOpen,
    onClose: projectFormOnClose,
  } = useDisclosure();

  // Using the custom hook to fetch the data.
  const data = useFetch("https://arezef.deta.dev/api/projects");

  console.log(data);

  return (
    <PageContainer isFixedNav>
      <PageContent
        buttonOn
        title="My Projects"
        label="Add New Project"
        onClick={projectFormOnOpen}
      >
        <Form
          projectFormIsOpen={projectFormIsOpen}
          projectFormOnClose={projectFormOnClose}
        />
        <Table selectable selected={[2, 3]} headers={headers} items={data} />
      </PageContent>
    </PageContainer>
  );
}

/*   let projects = [
    {
      id: 1,
      name: "Scrumbble",
      stars: 56,
      github_repo: "https://github.com/",
    },
    {
      id: 2,
      name: "JS Makers",
      stars: 35,
      github_repo: "https://github.com/",
    },
    {
      id: 3,
      name: "HashMeet",
      stars: 76,
      github_repo: "https://github.com/",
    },
  ];
 */
