import React from "react";
import { Box, BoxProps } from "@mantine/core";
import useStyles from "./style";
import { IProps } from "@src/types";

export interface IPageContainer extends IProps {
  props?: BoxProps<any>;
}

const PageContainer = ({ children, props }: IPageContainer) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container} {...props}>
      {children}
    </Box>
  );
};

export default PageContainer;
