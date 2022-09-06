import React from "react";
import { v4 as uuid } from "uuid";
import { Title } from "@mantine/core";
import data from "@static/projectsData.json";
import useStyles from "./style";
import InfoContainer from "@hoc/InfoContainer";
import ProjectCard from "@components/ProjectCard";
import Slideshow from "@components/Slideshow";

const Index = () => {
  const { classes } = useStyles();

  return (
    <InfoContainer>
      <Title order={4} pb='xs'>
        Projects
      </Title>
      <Slideshow>
        {data.map((item) => (
          <ProjectCard key={uuid()} data={item} />
        ))}
      </Slideshow>
    </InfoContainer>
  );
};

export default Index;
