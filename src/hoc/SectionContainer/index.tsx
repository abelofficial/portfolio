import React from "react";
import { Box, ListItemProps } from "@mantine/core";
import useStyles from "./style";

const SectionContainer = ({ children }: ListItemProps) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.container_bg} />
      <Box className={classes.container_main}>{children}</Box>
    </Box>
  );
};

export default SectionContainer;
