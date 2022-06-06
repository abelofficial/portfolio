import clsx from "classnames";
import { Box, Grid, Title } from "@mantine/core";
import React, { useEffect } from "react";
import NavLink from "@components/NavLinks";
import { BurgerMenuIcon } from "@components/Icons";
import useStyles from "./style";
import { useClickOutside, useMediaQuery } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDrawer,
  selectBurgerMenu,
  closeDrawer,
  openDrawer,
} from "src/store/SiteConfig";

const Index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { classes, theme } = useStyles();
  const dispatch = useDispatch();
  const bigScreen = useMediaQuery(
    `(min-width: ${theme.breakpoints.md}px)`,
    true
  );
  const drawer = useSelector(selectDrawer);
  const showBurgerMenu = useSelector(selectBurgerMenu);
  const ref = useClickOutside(() => dispatch(closeDrawer()));

  const handleCloseDrawer = () => {
    bigScreen || dispatch(closeDrawer());
  };

  useEffect(() => {
    bigScreen && dispatch(openDrawer());
    bigScreen || handleCloseDrawer();
  }, [bigScreen]);

  return (
    <Box ref={ref}>
      <Grid className={classes.mainSection}>
        <Box className={classes.headerContainer}>
          <Title order={2} className={classes.initial}>
            A.S
          </Title>
        </Box>
        <Box my='lg'>
          <NavLink column />
        </Box>
      </Grid>
      {showBurgerMenu && (
        <Box
          onClick={() => dispatch(openDrawer())}
          className={clsx(classes.actionButton, classes.openButton, {
            [`${classes.showActionButton}`]: !drawer,
            [`${classes.hideActionButton}`]: drawer,
          })}
        >
          <BurgerMenuIcon isActive={true} invert={true} height={20} />
        </Box>
      )}
    </Box>
  );
};

export default Index;
