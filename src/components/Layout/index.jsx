// Core
import clsx from "classnames";
import { useSelector } from "react-redux";

// Material ui
import { Box, Grid, useMediaQuery, useTheme } from "@material-ui/core";

// Internal
import Toolbar from "@local/src/components/sections/Toolbar";
import { PageContainer } from "@local/src/components/hoc";
import { selectDrawer } from "@local-store/SiteConfig";

// Component style
import useStyles from "./layout.style";
import Contact from "../sections/Contact";
import AboutMe from "../sections/AboutMe";
import { LogoSvg } from "@local/src/assets/svgs/exports";
import SiteConfig from "@local/src/components/sections/SiteConfig";

const Layout = ({ children }) => {
  const styles = useStyles();
  const theme = useTheme();
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
        justify='space-around'
        alignItems={bigScreen ? "flex-start" : "stretch"}
        className={clsx(styles.container)}
      >
        <Grid
          item
          xs={12}
          md={8}
          component={Box}
          py={2}
          className={clsx(styles.main)}
        >
          <PageContainer>{children}</PageContainer>
        </Grid>
        <Grid item xs={11} md={3} className={clsx(styles.sideBar)}>
          <Box display='flex' flexDirection='column' width='100%'>
            <LogoSvg width={270} height={60} className={clsx(styles.logo)} />
            <SiteConfig />
          </Box>
          <AboutMe />
          <Contact />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
