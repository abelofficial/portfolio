// Core
import clsx from 'classnames';
import { useSelector } from 'react-redux';

// Material ui
import { Box } from '@material-ui/core';

// Internal
import Toolbar from '@local-components/Toolbar';

// Component style
import useStyles from './layout-style';

const Layout = ({ children }) => {
  const classes = useStyles();
  const drawer = useSelector((state) => state.siteConfig.drawer);

  return (
    <Box className={classes.page}>
      <Box
        className={clsx(classes.toolbar, {
          [`${classes.showToolbar}`]: drawer,
          [`${classes.hideToolbar}`]: !drawer
        })}
      >
        <Toolbar />
      </Box>
      <main
        className={clsx(classes.main, {
          [`${classes.blur}`]: drawer
        })}
      >
        {children}
      </main>
    </Box>
  );
};

export default Layout;
