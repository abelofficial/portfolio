import React from "react";
import { Box, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    position: "relative",
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: "1rem",
    height: "fit-content",
    marginBottom: theme.spacing.sm,
    boxShadow: theme.shadows[1],
  },
  container_bg: {
    position: "absolute",
    zIndex: -100,
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.orange[3],
    opacity: 0.9,
    borderRadius: theme.defaultRadius,
  },
  container_main: {
    position: "relative",
    zIndex: 200,
  },
}));

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