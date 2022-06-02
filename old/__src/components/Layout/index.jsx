// Core
import { useRouter } from "next/router";
import clsx from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { MantineProvider } from "@mantine/core";

// Material ui
import { Box, Grid, Hidden, useMediaQuery, useTheme } from "@mui/material";

// Internal
import Toolbar from "@local-components/sections/Toolbar";
import { PageContainer } from "@local-components/hoc";
import {
  hideBurgerMenu,
  selectDrawer,
  showBurgerMenu,
} from "@local-store/SiteConfig";
import { useOnScreen } from "@local-components/hooks/useOnScreen";

// Component style
import useStyles from "./style";

import LogoSvg from "@local-components/collections/svgs/logo";
import Footer from "@local-components/sections/Footer";
import SiteConfig from "@local-components/sections/SiteConfig";
import { Sidebar } from "@local-components/sections/Sidebar";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const styles = useStyles(theme)();
  const isDrawerOpen = useSelector(selectDrawer);
  const [setRef, visible] = useOnScreen({ threshold: "0.6" });

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    isSmallScreen && router.push("/");
  }, []);

  useEffect(() => {
    if (visible) return dispatch(hideBurgerMenu());

    dispatch(showBurgerMenu());
  }, [visible]);

  return (
    <Box className={styles.page}>
      <Box
        className={clsx(styles.toolbar, {
          [`${styles.showToolbar}`]: isDrawerOpen,
          [`${styles.hideToolbar}`]: !isDrawerOpen,
        })}
      >
        <Toolbar />
      </Box>
      <Grid container justify='center' className={clsx(styles.container)}>
        <Grid item xs={12} md={7} className={clsx(styles.main)}>
          <MantineProvider
            theme={{ fontFamily: "Open Sans" }}
            withGlobalStyles
            withNormalizeCSS
          >
            <PageContainer>{children}</PageContainer>
          </MantineProvider>
          <Hidden mdUp>
            <Footer />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={5} className={clsx(styles.sideBar)}>
          <Box className={clsx(styles.sideBar_bg)} />
          <Box className={clsx(styles.sideBar_main)}>
            <LogoSvg width={200} height={60} className={clsx(styles.logo)} />
            <Box ref={setRef} width='100%'>
              <SiteConfig />
            </Box>
            {/* <AboutMe />
          <Contact />
          <GithubSummery /> */}
            <Sidebar />
            <Hidden mdDown>
              <Footer />
            </Hidden>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
