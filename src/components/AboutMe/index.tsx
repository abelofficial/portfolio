import { Box, Container, Title } from "@mantine/core";
import React from "react";
import useStyles from "./style";
import data from "@static/aboutMeData.json";
import InfoContainer from "@hoc/InfoContainer";
import Avatar from "@components/Svgs/Avatar";
const Index = () => {
  const { classes } = useStyles();

  return (
    <InfoContainer>
      <Container className={classes.container}>
        <Box>
          <Title order={2}> {data[0].title} </Title>
          <p>{data[0].description}</p>
        </Box>
        <Avatar alt='AboutMe image' />
      </Container>
    </InfoContainer>
  );
};

export default Index;
