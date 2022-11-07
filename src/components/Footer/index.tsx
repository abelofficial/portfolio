/* eslint-disable react/jsx-no-undef */
import { Text } from "@mantine/core";
import React from "react";
import useStyles from "./style";

const Index = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Text className={classes.smallText}>
        Made by Abel © {new Date().getFullYear()}. As always With 💜
      </Text>
    </div>
  );
};

export default Index;
