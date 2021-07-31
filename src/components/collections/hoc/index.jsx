// Material-ui
import { Box } from '@material-ui/core';

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

  return (
    <Box className={styles.pageContainer} {...restProps}>
      {children}
    </Box>
  );
};
