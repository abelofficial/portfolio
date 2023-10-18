import clsx from "classnames";
import { Box, Grid, Title } from "@mantine/core";
import React, { useEffect } from "react";
import { BurgerMenuIcon } from "@components/Atoms/Icons";
import useStyles from "./style";
import { useClickOutside, useMediaQuery } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDrawer,
  selectBurgerMenu,
  closeDrawer,
  openDrawer,
} from "@store/SiteConfig";
import NavLink from "@components/Molecule/NavLinks";

const Index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { classes, theme } = useStyles();
  const dispatch = useDispatch();
  const bigScreen = useMediaQuery(
    `(min-width: ${theme.breakpoints.md}px)`,
    false
  );
  const drawer = useSelector(selectDrawer);
  const showBurgerMenu = useSelector(selectBurgerMenu);
  const ref = useClickOutside(() => handleOutsideClick());

  const handleCloseDrawer = () => {
    bigScreen || dispatch(closeDrawer());
  };

  const handleOutsideClick = () => {
    bigScreen || dispatch(closeDrawer());
  };

  useEffect(() => {
    bigScreen && dispatch(openDrawer());
    bigScreen || handleCloseDrawer();
  }, [bigScreen, dispatch]);

  return (
    <Box ref={ref}>
      <Grid className={classes.mainSection}>
        <Box className={classes.headerContainer}>
          <Title order={2} className={classes.initial}>
            A.S
          </Title>
        </Box>
        <Box my='lg'>
          <NavLink column invert />
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
          <BurgerMenuIcon />
        </Box>
      )}
    </Box>
  );
};

export default Index;