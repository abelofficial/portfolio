// Core
import { useEffect } from "react";
import clsx from "classnames";
import { useSelector, useDispatch } from "react-redux";

// Internal
import {
  selectDrawer,
  selectDarkMode,
  setDarkMode,
  turnOffDarkMode,
} from "@local-store/SiteConfig";
import globalTheme from "src/styles/globalTheme";
import lightTheme from "src/styles/lightTheme";
import darkTheme from "src/styles/darkTheme";

// Material-ui
import { useMediaQuery, Box } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/styles";

// Styles
import useStyles from "./style";

export const SectionContainer = ({ children, ...restProps }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();

  return (
    <Box className={clsx(styles.sectionContainer)} {...restProps}>
      {children}
    </Box>
  );
};

export const InfoContainer = ({ children, ...restProps }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();

  return (
    <Box className={clsx(styles.infoContainer)} {...restProps}>
      {children}
    </Box>
  );
};

export const PageContainer = ({ children, ...restProps }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();

  const bigScreen = useMediaQuery(theme.breakpoints.up("md"));
  const drawer = useSelector(selectDrawer);

  return (
    <Box
      className={clsx(styles.pageContainer, {
        [`${styles.blur}`]: !bigScreen & drawer,
        [`${styles.withToolbar}`]: bigScreen,
      })}
      {...restProps}
    >
      {children}
    </Box>
  );
};

// export const SiteContainer = ({ children, ...restProps }) => {
//   const styles = useStyles();

//   return (
//     <Box className={styles.siteContainer} {...restProps}>
//       {children}
//     </Box>
//   );
// };

export const CustomThemeProvider = ({ children, ...restProps }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
  const theme = globalTheme(darkMode ? darkTheme : lightTheme);

  useEffect(() => {
    darkMode || dispatch(turnOffDarkMode());
    darkMode && dispatch(setDarkMode());
  }, [darkMode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
