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
import globalTheme from "@local-utils/globalTheme";

// Material-ui
import { useMediaQuery } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/styles";
import { Box } from "@mui/material";

// Styles
import useStyles from "./style";

// export const SectionContainer = ({ children, ...restProps }) => {
//   const styles = useStyles();

//   return (
//     <Box className={clsx(styles.sectionContainer)} {...restProps}>
//       {children}
//     </Box>
//   );
// };

// export const InfoContainer = ({ children, ...restProps }) => {
//   const styles = useStyles();

//   return (
//     <Box className={clsx(styles.infoContainer)} {...restProps}>
//       {children}
//     </Box>
//   );
// };

// export const PageContainer = ({ children, ...restProps }) => {
//   const styles = useStyles();
//   const theme = useTheme();

//   const bigScreen = useMediaQuery(theme.breakpoints.up("md"));
//   const drawer = useSelector(selectDrawer);

//   return (
//     <Box
//       className={clsx(styles.pageContainer, {
//         [`${styles.blur}`]: !bigScreen & drawer,
//         [`${styles.withToolbar}`]: bigScreen,
//       })}
//       {...restProps}
//     >
//       {children}
//     </Box>
//   );
// };

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
  const theme = globalTheme(darkMode);

  useEffect(() => {
    darkMode || dispatch(turnOffDarkMode());
    darkMode && dispatch(setDarkMode());
  }, [darkMode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
