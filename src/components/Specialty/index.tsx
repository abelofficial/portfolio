import React from "react";
import { v4 as uuid } from "uuid";
import Image from "next/image";
import { Box, Grid, Title } from "@mantine/core";
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
        <Grid.Col className={classes.listContainer}>
          <Grid>
            {data.map((item, _i) => (
              <Box
                component={Grid.Col}
                span={11}
                xs={11}
                sm={10}
                md={5}
                key={uuid()}
                className={classes.card}
              >
                <Image
                  alt={item.title + " Image"}
                  src={item.icon}
                  width={60}
                  height={60}
                />
                <Title order={5}>{item.title}</Title>
                <p className={classes.text}>{item.content}</p>
              </Box>
            ))}
          </Grid>
        </Grid.Col>
      </Grid>
    </InfoContainer>
  );
};

export default Index;
