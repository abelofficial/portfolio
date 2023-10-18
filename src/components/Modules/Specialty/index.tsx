import React from "react";
import { v4 as uuid } from "uuid";
import Image from "next/image";
import { Box, Grid, Text, Title } from "@mantine/core";
import useStyles from "./style";
import InfoContainer from "@components/Molecule/InfoContainer";
import { ISpecialtyModule } from "@src/types";
import Slideshow from "@components/Molecule/Slideshow";

interface ISpecialtyProps {
  title: string;
  data: Array<ISpecialtyModule>;
}

const Index = ({ title, data }: ISpecialtyProps) => {
  const { classes } = useStyles();

  return (
    <InfoContainer>
      <Grid className={classes.container}>
        <Grid.Col span={1}>
          <Title order={4}> {title} </Title>
        </Grid.Col>
        <Grid.Col className={classes.listContainer}>
          <Slideshow auto duration={12000}>
            {data.map((item, _i) => (
              <Box m={0} p={0} key={uuid()} className={classes.card}>
                <Image
                  alt={item.title + " Image"}
                  src={item.icon.url}
                  width={60}
                  height={60}
                />
                <Title order={4} mb={1}>
                  {item.title}
                </Title>
                <Text className={classes.text}>{item.content}</Text>
              </Box>
            ))}
          </Slideshow>
        </Grid.Col>
      </Grid>
    </InfoContainer>
  );
};

export default Index;
