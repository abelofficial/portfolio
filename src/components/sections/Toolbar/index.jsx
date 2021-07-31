// Core
import clsx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

// Material ui
import {
  Grid,
  IconButton,
  Box,
  Typography,
  ClickAwayListener
} from '@material-ui/core';

// Local
import { openDrawer, closeDrawer } from '@local-store/SiteConfig';
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
  const classes = useStyles();

  const drawer = useSelector((state) => state.siteConfig.drawer);
  const dispatch = useDispatch();

  return (
    <ClickAwayListener onClickAway={() => dispatch(closeDrawer())}>
      <Grid container>
        <IconButton
          className={clsx(classes.actionButton, classes.closeButton, {
            [`${classes.showActionButton}`]: drawer,
            [`${classes.hideActionButton}`]: !drawer
          })}
          onClick={() => dispatch(closeDrawer())}
        >
          <CloseIcon />
        </IconButton>
        <Grid item>
          <Grid
            container
            direction="column"
            alignContent="center"
            justify="space-between"
            className={classes.mainSection}
          >
            <Typography variant="h1" className={classes.initial}>
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
        <IconButton
          onClick={() => dispatch(openDrawer())}
          className={clsx(classes.actionButton, classes.openButton, {
            [`${classes.showActionButton}`]: !drawer,
            [`${classes.hideActionButton}`]: drawer
          })}
        >
          <BurgerMenuIcon />
        </IconButton>
      </Grid>
    </ClickAwayListener>
  );
};

export default Toolbar;
