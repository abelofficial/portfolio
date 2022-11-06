import React from "react";
import { Title } from "@mantine/core";
import InfoContainer from "@hoc/InfoContainer";
import Slideshow from "@components/Slideshow";
import { IProjectModule } from "@src/types";
import ProjectCard from "@components/ProjectCard";
import { v4 as uuid } from "uuid";
export interface ProjectsProps {
  data: IProjectModule;
}
const Index = ({ data }) => (
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

export default Index;
