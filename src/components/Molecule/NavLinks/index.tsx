import React from "react";
import clsx from "classnames";
import { BlogIcon, HomeIcon, TimeLineIcon } from "@components/Atoms/Icons";
import useStyles from "./style";
import { Box } from "@mantine/core";
import { ROUTES } from "@utils/RoutePaths";
import { useRouter } from "next/router";

export interface NavLinkProps {
  column?: boolean;
  invert?: boolean;
}

const Index = ({ invert, column }: NavLinkProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Box
      className={clsx(classes.container, {
        [`${classes.column}`]: column,
        [`${classes.row}`]: !column,
      })}
    >
      <HomeIcon
        invert={invert}
        isActive={router.pathname === ROUTES.HOME}
        width={16}
        height={16}
        onClick={() => router.push(ROUTES.HOME)}
      />
      <TimeLineIcon
        invert={invert}
        isActive={router.pathname === ROUTES.TIMELINE}
        width={16}
        height={16}
        onClick={() => router.push(ROUTES.TIMELINE)}
      />
      <BlogIcon
        invert={invert}
        isActive={router.pathname === ROUTES.BLOG}
        width={16}
        height={16}
        onClick={() => router.push(ROUTES.BLOG)}
      />
    </Box>
  );
};

export default Index;
