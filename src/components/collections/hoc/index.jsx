// Core
import { useEffect } from 'react';
import clsx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

// Internal
import {
  selectDrawer,
  selectDarkMode,
  setDarkMode,
  turnOffDarkMode
} from '@local-store/SiteConfig';
import globalTheme from '@local-utils/globalTheme';
import { useOnScreen } from '@local/src/hooks/useOnScreen';

// Material-ui
import {
  Box,
  useMediaQuery,
  useTheme,
  ThemeProvider,
  responsiveFontSizes,
  Container
} from '@material-ui/core';

// Styles
import useStyles from './style';

export const SectionContainer = ({ className, children, ...restProps }) => {
  const styles = useStyles();

  return (
    <Box className={clsx(styles.sectionContainer)} {...restProps}>
      {children}
    </Box>
  );
};

export const PageContainer = ({ className, children, ...restProps }) => {
  const styles = useStyles();
  const theme = useTheme();

  const bigScreen = useMediaQuery(theme.breakpoints.up('md'));
  const drawer = useSelector(selectDrawer);

  return (
    <Box
      className={clsx(styles.pageContainer, {
        [`${styles.blur}`]: !bigScreen & drawer,
        [`${styles.withToolbar}`]: bigScreen
      })}
      {...restProps}
    >
      {children}
    </Box>
  );
};

export const SiteContainer = ({ className, children, ...restProps }) => {
  const styles = useStyles();

  return (
    <Box className={styles.siteContainer} {...restProps}>
      {children}
    </Box>
  );
};

export const CustomThemeProvider = ({ className, children, ...restProps }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
  const theme = responsiveFontSizes(globalTheme(darkMode));

  useEffect(() => {
    darkMode || dispatch(turnOffDarkMode());
    darkMode && dispatch(setDarkMode());
  }, [darkMode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
