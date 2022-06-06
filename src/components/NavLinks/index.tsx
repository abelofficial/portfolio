import React from "react";
import clsx from "classnames";
import { BlogIcon, HomeIcon, TimeLineIcon } from "@components/Icons";
import useStyles from "./style";
import { Box } from "@mantine/core";

export interface NavLinkProps {
  column?: boolean;
}

const Index = ({ column }: NavLinkProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { classes } = useStyles();

  return (
    <Box
      className={clsx(classes.container, {
        [`${classes.column}`]: column,
        [`${classes.row}`]: !column,
      })}
    >
      <HomeIcon invert={true} isActive={true} width={25} height={25} />
      <TimeLineIcon invert={true} isActive={false} width={25} height={25} />
      <BlogIcon invert={true} isActive={true} width={25} height={25} />
    </Box>
  );
};

export default Index;
