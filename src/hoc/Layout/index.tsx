import React, { useEffect } from "react";
import clsx from "classnames";
import { Box } from "@mantine/core";
import useStyles from "./style";
import Toolbar from "@components/Toolbar";
import Sidebar from "@components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  hideBurgerMenu,
  selectDrawer,
  showBurgerMenu,
} from "@store/SiteConfig";
import useOnScreen from "@src/hooks/UseOnScreen";
import MenuBar from "@components/MenuBar";
import PageContainer from "@hoc/PageContainer";
import Footer from "@components/Footer";
import { useMediaQuery } from "@mantine/hooks";

export interface LayoutProps {
  children: JSX.Element;
  sidebar: JSX.Element;
}

const Layout = ({ children, sidebar }: LayoutProps) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector(selectDrawer);
  const [visible] = useOnScreen({ threshold: 0.6 });
  const bigScreen = useMediaQuery("(min-width: 993px)");

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
      <Box className={classes.container}>
        <Box className={classes.main}>
          <PageContainer>
            {children}
            {bigScreen || <Footer />}
          </PageContainer>
        </Box>
        <Box className={classes.sideBar}>
          <Box className={classes.sideBar_bg} />
          <Box className={classes.sideBar_main}>
            <MenuBar />
            <Sidebar>{sidebar}</Sidebar>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
