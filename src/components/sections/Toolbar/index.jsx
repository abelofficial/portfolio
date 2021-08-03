// Core
import clsx from 'classnames';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Material ui
import {
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
  Typography,
  ClickAwayListener,
  Box
} from '@material-ui/core';

// Local
import { openDrawer, closeDrawer, selectDrawer } from '@local-store/SiteConfig';
import {
  HomeIcon,
  EducationIcon,
  BlogIcon,
  MessageIcon,
  SettingIcon,
  LogInIcon,
  CloseIcon,
  BurgerMenuIcon
} from '@local/src/components/collections/icons';

// Component style
import useStyles from './toolbar.style';

const Toolbar = (props) => {
  const styles = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const bigScreen = useMediaQuery(theme.breakpoints.up('md'));
  const drawer = useSelector(selectDrawer);

  const handleCloseDrawer = () => {
    bigScreen || dispatch(closeDrawer());
  };

  useEffect(() => {
    bigScreen && dispatch(openDrawer());
    bigScreen || handleCloseDrawer();
  }, [bigScreen]);

  return (
    <ClickAwayListener onClickAway={handleCloseDrawer}>
      <Grid container>
        <Box>
          {bigScreen ? (
            <> </>
          ) : (
            <IconButton
              className={clsx(styles.actionButton, styles.closeButton, {
                [`${styles.showActionButton}`]: drawer,
                [`${styles.hideActionButton}`]: !drawer
              })}
              onClick={() => dispatch(closeDrawer())}
            >
              <CloseIcon />
            </IconButton>
          )}
        </Box>
        <Grid item>
          <Grid
            container
            direction="column"
            alignContent="center"
            justify="space-between"
            className={styles.mainSection}
          >
            <Typography variant="h1" className={styles.initial}>
              A.S
            </Typography>

            <Grid item>
              <Grid container direction="column" alignContent="center">
                <IconButton>
                  <HomeIcon isActive />
                </IconButton>
                <IconButton>
                  <EducationIcon />
                </IconButton>
                <IconButton>
                  <BlogIcon />
                </IconButton>
                <IconButton>
                  <MessageIcon />
                </IconButton>
                <IconButton>
                  <SettingIcon />
                </IconButton>
              </Grid>
            </Grid>
            <IconButton>
              <LogInIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Box>
          {bigScreen ? (
            <> </>
          ) : (
            <IconButton
              onClick={() => dispatch(openDrawer())}
              className={clsx(styles.actionButton, styles.openButton, {
                [`${styles.showActionButton}`]: !drawer,
                [`${styles.hideActionButton}`]: drawer
              })}
            >
              <BurgerMenuIcon />
            </IconButton>
          )}
        </Box>
      </Grid>
    </ClickAwayListener>
  );
};

export default Toolbar;
