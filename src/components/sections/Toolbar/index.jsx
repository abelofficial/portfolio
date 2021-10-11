// Core
import clsx from "classnames";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
// Material ui
import {
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
  Typography,
  ClickAwayListener,
  Box,
} from "@material-ui/core";

// Local
import { openDrawer, closeDrawer, selectDrawer } from "@local-store/SiteConfig";
import { LogInIcon, BurgerMenuIcon } from "@local-assets/icons";

// Component style
import useStyles from "./toolbar.style";
import { NavigationLinks } from "../../collections/Link";

const Toolbar = (props) => {
  const styles = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const bigScreen = useMediaQuery(theme.breakpoints.up("md"));
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
        <Grid item>
          <Grid
            container
            direction='column'
            alignContent='center'
            justify='space-between'
            className={styles.mainSection}
          >
            <Typography variant='h1' className={styles.initial}>
              A.S
            </Typography>

            <Grid item>
              <NavigationLinks invert />
            </Grid>
            <Link href=''>
              <a>
                <LogInIcon />
              </a>
            </Link>
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
                [`${styles.hideActionButton}`]: drawer,
              })}
            >
              <BurgerMenuIcon Width={100} />
            </IconButton>
          )}
        </Box>
      </Grid>
    </ClickAwayListener>
  );
};

export default Toolbar;
