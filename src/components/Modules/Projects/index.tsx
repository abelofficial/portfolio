import React from "react";
import { Title } from "@mantine/core";
import InfoContainer from "@components/Molecule/InfoContainer";
import Slideshow from "@components/Molecule/Slideshow";
import { IProjectModule } from "@src/types";
import { v4 as uuid } from "uuid";
import ProjectCard from "@components/Molecule/ProjectCard";
export interface ProjectsProps {
  data: IProjectModule;
  title: string;
}
const Index = ({ data, title }) => (
  <InfoContainer>
    <Title order={4} pb='xs'>
      {title}
    </Title>
    <Slideshow>
      {data.map((item) => (
        <ProjectCard key={uuid()} data={item} />
      ))}
    </Slideshow>
  </InfoContainer>
);

export default Index;
