import React from "react";
import { BlogIcon, HomeIcon, TimeLineIcon } from "@components/Icons";
import useStyles from "./style";
import { Box } from "@mantine/core";

const Index = ({ invert }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <HomeIcon invert={invert} isActive={true} width={30} height={30} />
      <TimeLineIcon invert={invert} isActive={false} width={30} height={30} />
      <BlogIcon invert={invert} isActive={true} width={30} height={30} />
    </Box>
  );
};

export default Index;
