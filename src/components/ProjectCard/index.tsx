import React from "react";
import { Grid, Title } from "@mantine/core";
import useStyles from "./style";
import Image from "next/image";

type Project = {
  name: string;
  media: string;
  github: string;
  link: string;
  description: string;
};

export interface ProjectCardProps {
  data: Project;
}

const Index = ({ data }: ProjectCardProps) => {
  const { classes } = useStyles();

  return (
    <Grid className={classes.container}>
      <Grid.Col xs={6}>
        <Image
          className={classes.media}
          alt=''
          src='/images/project.png'
          width={400}
          height={300}
          layout='intrinsic'
        />
      </Grid.Col>
      <Grid.Col xs={6}>
        <Title order={4} pb='xs'>
          {data.name}
        </Title>
        <p className={classes.text}>{data.description}</p>
      </Grid.Col>
    </Grid>
  );
};

export default Index;
