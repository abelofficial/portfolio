// Core
import clsx from 'classnames';
import { useSelector } from 'react-redux';

// Material-ui
import { Box, useMediaQuery, useTheme } from '@material-ui/core';

// Styles
import useStyles from './style';

export const GreyContainer = ({ className, children, ...restProps }) => {
  const styles = useStyles();

  return (
    <Box className={styles.greyContainer} {...restProps}>
      {children}
    </Box>
  );
};

export const PageContainer = ({ className, children, ...restProps }) => {
  const styles = useStyles();
  const theme = useTheme();

  const bigScreen = useMediaQuery(theme.breakpoints.up('md'));
  const drawer = useSelector((state) => state.siteConfig.drawer);

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
