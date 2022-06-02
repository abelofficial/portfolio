import React from "react";
import { Box, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    margin: theme.spacing.xs,
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.grey,
    borderRadius: theme.defaultRadius,
    height: "fit-content",
    boxShadow: theme.shadows.sm,
  },
}));

const InfoContainer = ({ children }) => {
  const { classes } = useStyles();

  return <Box className={classes.container}>{children}</Box>;
};

export default InfoContainer;
