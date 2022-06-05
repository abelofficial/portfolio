import React from "react";
import { Box, BoxProps } from "@mantine/core";
import useStyles from "./style";
import { IProps } from "src/types";

export interface IInfoContainer extends IProps {
  props?: BoxProps<any>;
}

const InfoContainer = ({ children, props }: IInfoContainer) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container} {...props}>
      {children}
    </Box>
  );
};

export default InfoContainer;
