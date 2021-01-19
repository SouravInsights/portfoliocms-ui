import React from "react";

import { PageContainer, PageContent, Table } from "../Layout";
import useFetch from "../../hooks/useFetch";

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
  ];

  // Using the custom hook to fetch the data.
  const data = useFetch("https://arezef.deta.dev/api/projects");
  console.log(data);

  return (
    <PageContainer isFixedNav>
      <PageContent
        title="Projects"
        label="Add Project"
        onClick={() => {
          alert("ok");
        }}
      >
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
