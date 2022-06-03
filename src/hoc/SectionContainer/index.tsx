import React from "react";
import { Box } from "@mantine/core";
import useStyles from "./style";

const SectionContainer = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.container_bg} />
      <Box className={classes.container_main}></Box>
      {children}
    </Box>
  );
};

export default SectionContainer;
