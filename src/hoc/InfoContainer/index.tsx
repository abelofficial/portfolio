import React from "react";
import { Box } from "@mantine/core";
import useStyles from "./style";

const InfoContainer = ({ children }) => {
  const { classes } = useStyles();

  return <Box className={classes.container}>{children}</Box>;
};

export default InfoContainer;
