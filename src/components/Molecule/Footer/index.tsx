/* eslint-disable react/jsx-no-undef */
import { Box, Text } from "@mantine/core";
import React from "react";
import useStyles from "./style";

const Index = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Text className={classes.smallText}>
        Made by Abel © {new Date().getFullYear()}. As always With 💜
      </Text>
    </Box>
  );
};

export default Index;
