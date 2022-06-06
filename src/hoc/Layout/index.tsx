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

export interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  const { classes, theme } = useStyles();
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
      <Box className={classes.container}>
        <Box className={classes.main}>
          <PageContainer>{children}</PageContainer>
          {/* <Footer /> */}
        </Box>
        <Box className={classes.sideBar}>
          <Box className={classes.sideBar_bg} />
          <Box className={classes.sideBar_main}>
            <MenuBar />
            <Sidebar />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
