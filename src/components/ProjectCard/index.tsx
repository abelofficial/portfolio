import React from "react";
import { Box, Grid, Title } from "@mantine/core";
import useStyles from "./style";

type Project = {
  name: string;
  media: string;
  github: string;
  link: string;
  description: string;
  techStack: string[];
};

export interface ProjectCardProps {
  data: Project;
}

const Index = ({ data }: ProjectCardProps) => {
  const { classes } = useStyles();

  return (
    <Grid className={classes.container}>
      <Grid.Col xs={7}>
        <video className={classes.media} autoPlay loop muted>
          <source src={data.media} type='video/mp4' />
        </video>
      </Grid.Col>
      <Grid.Col xs={5}>
        <Title order={3} pb='xs'>
          {data.name}
        </Title>
        <p className={classes.text}>{data.description}</p>
        <Title order={4}>Tech stack</Title>
        <Box className={classes.chipList}>
          {data.techStack.map((t) => (
            <Box key={t} className={classes.chip}>
              <p>{t}</p>
            </Box>
          ))}
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default Index;
