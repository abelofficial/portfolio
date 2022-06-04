import React from "react";
import { BlogIcon, HomeIcon, TimeLineIcon } from "@components/Icons";
import useStyles from "./style";

const Index = ({ invert }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { classes } = useStyles();

  return (
    <>
      <HomeIcon invert={invert} isActive={true} width={30} />
      <TimeLineIcon invert={invert} isActive={false} width={30} />
      <BlogIcon invert={invert} isActive={true} width={30} />
    </>
  );
};

export default Index;
