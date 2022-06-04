import React from "react";
import { Box, Grid, MediaQuery } from "@mantine/core";
import SectionContainer from "../SectionContainer";
import useStyles from "./style";
import InfoContainer from "@hoc/InfoContainer";
import Toolbar from "@components/Toolbar";
import { BurgerMenuIcon } from "@components/Icons";
export interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.page}>
      <Box className={classes.toolbar}>
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
              <h1>Sidebar top</h1>
            </InfoContainer>
            <InfoContainer>
              <h1>Sidebar bottom</h1>
              <BurgerMenuIcon isActive={true} invert={true} />
            </InfoContainer>
            <MediaQuery smallerThan='md' styles={{ display: "none" }}>
              <h1>Footer</h1>
            </MediaQuery>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default Layout;
