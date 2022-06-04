import clsx from "classnames";
import { Grid, Title } from "@mantine/core";
import React from "react";
import useStyles from "./style";
import data from "@static/aboutMeData.json";
import InfoContainer from "@hoc/InfoContainer";
import Avatar from "@components/Svgs/Avatar";
const Index = () => {
  const { classes } = useStyles();

  return (
    <InfoContainer props={{ p: "xs" }}>
      <Grid columns={12}>
        <Grid.Col xs={8} className={classes.section}>
          <Title order={2}> {data[0].title} </Title>
          <p>{data[0].description}</p>
        </Grid.Col>

        <Grid.Col xs={3} className={clsx(classes.section, classes.animSection)}>
          <Avatar alt='AboutMe image' className={classes.image} />
        </Grid.Col>
      </Grid>
    </InfoContainer>
  );
};

export default Index;
