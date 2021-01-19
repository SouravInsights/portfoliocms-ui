import React from "react";

import { PageContainer, PageContent, Table } from "../Layout";

export default function Projects() {
  let headers = [
    {
      id: "id",
      title: "ID",
    },
    {
      id: "name",
      title: "Name",
    },
    {
      id: "stars",
      title: "Stars",
    },
    {
      id: "github_repo",
      title: "GitHub Repo",
    },
  ];

  let projects = [
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
  return (
    <PageContainer isFixedNav>
      <PageContent
        title="Projects"
        label="Add Project"
        onClick={() => {
          alert("ok");
        }}
      >
        <Table
          selectable
          selected={[2, 3]}
          headers={headers}
          items={projects}
        />
      </PageContent>
    </PageContainer>
  );
}
