import React from "react";
import { v4 as uuid } from "uuid";
import Image from "next/image";
import { Box, Container, Divider, Grid, Title } from "@mantine/core";
import data from "@static/specialtyData.json";
import useStyles from "./style";
import InfoContainer from "@hoc/InfoContainer";

const Index = () => {
  const { classes } = useStyles();

  return (
    <InfoContainer>
      <Grid columns={1} className={classes.container}>
        <Grid.Col span={1}>
          <Title order={4}>Specialty</Title>
        </Grid.Col>
        {data.map((item, _i) => (
          <Grid.Col span={1} key={uuid()}>
            <Box>
              <Divider className={classes.divider} />
              <Container className={classes.section}>
                <Image
                  alt={item.title + " Image"}
                  src={item.icon}
                  width={60}
                  height={60}
                />
                <Title order={5}>{item.title}</Title>
                <p>{item.content}</p>
              </Container>
            </Box>
          </Grid.Col>
        ))}
      </Grid>
    </InfoContainer>
  );
};

export default Index;
