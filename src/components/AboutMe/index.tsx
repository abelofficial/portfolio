import { Grid, Title } from "@mantine/core";
import React from "react";
import useStyles from "./style";
import data from "@static/aboutMeData.json";
import InfoContainer from "@hoc/InfoContainer";
import Avatar from "@components/Svgs/Avatar";
const Index = () => {
  const { classes } = useStyles();

  return (
    <InfoContainer>
      <Grid align='center' justify='space-evenly' className={classes.container}>
        <Title order={2}> {data[0].title} </Title>
        <Avatar alt='AboutMe image' width={50} />
      </Grid>
      <p className={classes.text}>{data[0].description}</p>
    </InfoContainer>
  );
};

export default Index;
