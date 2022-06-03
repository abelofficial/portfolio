import React from "react";
import { Box, MediaQuery, SimpleGrid } from "@mantine/core";
import SectionContainer from "../SectionContainer";
import useStyles from "./style";
import InfoContainer from "@hoc/InfoContainer";

export interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.page}>
      <Box className={classes.toolbar}>
        <h1>Toolbar</h1>
      </Box>
      <SimpleGrid cols={2} className={classes.container}>
        <Box className={classes.main}>
          <SectionContainer>{children}</SectionContainer>
          <MediaQuery largerThan='md' styles={{ display: "none" }}>
            <h1>Footer</h1>
          </MediaQuery>
        </Box>
        <Box className={classes.sideBar}>
          <Box className={classes.sideBar_bg} />
          <Box className={classes.sideBar_main}>
            <InfoContainer>
              <h1>Sidebar top</h1>
            </InfoContainer>
            <InfoContainer>
              <h1>Sidebar bottom</h1>
            </InfoContainer>
            <MediaQuery smallerThan='md' styles={{ display: "none" }}>
              <h1>Footer</h1>
            </MediaQuery>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Layout;
