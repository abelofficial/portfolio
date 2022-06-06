import React from "react";
import Image from "next/image";
import clsx from "classnames";
import { v4 as uuid } from "uuid";
import { Box, Grid, Title } from "@mantine/core";
import useStyles from "./style";
import InfoContainer from "@hoc/InfoContainer";
import data from "@static/techStackData.json";

const Index = () => {
  const { classes } = useStyles();

  return (
    <InfoContainer>
      <Box>
        <Title order={4}>Tech stack</Title>
        <Grid className={clsx(classes.section, classes.slideAnim)}>
          {data.map((item, _i) => (
            <Grid.Col span={3} key={uuid()}>
              <Box className={clsx(classes.frameworkContainer)}>
                <Image
                  alt={item.title + " icon"}
                  width={20}
                  height={20}
                  src={item.link}
                />
                <pre> {item.name} </pre>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </InfoContainer>
  );
};

export default Index;
