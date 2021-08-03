// Core
import clsx from 'classnames';
import { useSelector } from 'react-redux';

// Material ui
import { Box } from '@material-ui/core';

// Internal
import Toolbar from '@local/src/components/sections/Toolbar';
import { PageContainer } from '@local/src/components/collections/hoc';
import { selectDrawer } from '@local-store/SiteConfig';

// Component style
import useStyles from './layout.style';

const Layout = ({ children }) => {
  const styles = useStyles();
  const drawer = useSelector(selectDrawer);

  return (
    <Box className={styles.page}>
      <Box
        className={clsx(styles.toolbar, {
          [`${styles.showToolbar}`]: drawer,
          [`${styles.hideToolbar}`]: !drawer
        })}
      >
        <Toolbar />
      </Box>
      <PageContainer>{children}</PageContainer>
    </Box>
  );
};

export default Layout;
