// Core
import clsx from "classnames";
import { useSelector } from "react-redux";

// Material ui
import { Box, Grid, Hidden, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";

// Internal
import Toolbar from "@local/src/components/sections/Toolbar";
import { PageContainer } from "@local/src/components/hoc";
import { selectDrawer } from "@local-store/SiteConfig";

// Component style
import useStyles from "./layout.style";

import Contact from "../sections/Contact";
import AboutMe from "../sections/AboutMe";
import { LogoSvg } from "@local/src/assets/svgs/exports";
import Footer from "../sections/Footer";
import { GithubSummery } from "../collections/cards";
import SiteConfig from "@local/src/components/sections/SiteConfig";

const Layout = ({ children }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();
  const drawer = useSelector(selectDrawer);

  const bigScreen = useMediaQuery(theme.breakpoints.up("md"));

  // const [setRef, visible] = useOnScreen({ threshold: '0.35' });

  return (
    <Box className={styles.page}>
      <Box
        className={clsx(styles.toolbar, {
          [`${styles.showToolbar}`]: drawer,
          [`${styles.hideToolbar}`]: !drawer,
        })}
      >
        <Toolbar />
      </Box>
      <Grid
        container
        direction={bigScreen ? "row" : "column-reverse"}
        justify='center'
        alignItems={bigScreen ? "flex-start" : "stretch"}
        className={clsx(styles.container)}
      >
        <Grid item xs={12} md={7} className={clsx(styles.main)}>
          <PageContainer>{children}</PageContainer>
          <Hidden mdUp>
            <Footer />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={5} className={clsx(styles.sideBar)}>
          <LogoSvg width={200} height={60} className={clsx(styles.logo)} />
          <SiteConfig />
          <AboutMe />
          <Contact />
          <GithubSummery />
          <Hidden mdDown>
            <Footer />
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
