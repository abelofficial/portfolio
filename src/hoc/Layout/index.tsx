import React, { useEffect } from "react";
import clsx from "classnames";
import { Box, Grid, MediaQuery } from "@mantine/core";
import SectionContainer from "../SectionContainer";
import useStyles from "./style";
import InfoContainer from "@hoc/InfoContainer";
import Toolbar from "@components/Toolbar";
import Sidebar from "@components/Sidebar";
import { BurgerMenuIcon } from "@components/Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  hideBurgerMenu,
  selectDrawer,
  showBurgerMenu,
} from "src/store/SiteConfig";
import useOnScreen from "src/hooks/UseOnScreen";

export interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector(selectDrawer);
  const [setRef, visible] = useOnScreen({ threshold: 0.6 });

  useEffect(() => {
    if (visible) {
      dispatch(hideBurgerMenu());
      return;
    }

    dispatch(showBurgerMenu());
  }, [visible]);

  return (
    <Box className={classes.page}>
      <Box
        className={clsx(classes.toolbar, {
          [`${classes.showToolbar}`]: isDrawerOpen,
          [`${classes.hideToolbar}`]: !isDrawerOpen,
        })}
      >
        <Toolbar />
      </Box>
      <Grid columns={16} className={classes.container}>
        <Grid.Col md={10} sm={16} className={classes.main}>
          <SectionContainer>{children}</SectionContainer>
          <MediaQuery largerThan='md' styles={{ display: "none" }}>
            <h1>Footer</h1>
          </MediaQuery>
        </Grid.Col>
        <Grid.Col md={6} sm={16} className={classes.sideBar}>
          <Box className={classes.sideBar_bg} />
          <Box className={classes.sideBar_main}>
            <InfoContainer>
              <Sidebar />
            </InfoContainer>
            <InfoContainer>
              <h1>Sidebar bottom</h1>
              <BurgerMenuIcon isActive={true} invert={true} />
            </InfoContainer>
            <MediaQuery smallerThan='md' styles={{ display: "none" }}>
              <h1 ref={setRef}>Footer</h1>
            </MediaQuery>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default Layout;
