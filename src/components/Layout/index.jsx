// Core
import clsx from "classnames";
import { useSelector } from "react-redux";

// Material ui
import { Box, Grid, Hidden, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";

// Internal
import Toolbar from "@local-components/sections/Toolbar";
import { PageContainer } from "@local-components/hoc";
import { selectDrawer } from "@local-store/SiteConfig";

// Component style
import useStyles from "./style";

import LogoSvg from "@local-components/collections/svgs/logo";
import Footer from "@local-components/sections/Footer";
import SiteConfig from "@local-components/sections/SiteConfig";
import { Sidebar } from "@local-components/sections/Sidebar";

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
          {/* <AboutMe />
          <Contact />
          <GithubSummery /> */}
          <Sidebar />
          <Hidden mdDown>
            <Footer />
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
