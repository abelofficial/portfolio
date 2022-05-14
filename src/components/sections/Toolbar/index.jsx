// Core
import clsx from "classnames";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Material ui
import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  ClickAwayListener,
} from "@mui/material";
import { useTheme } from "@mui/styles";

// Local
import {
  openDrawer,
  closeDrawer,
  selectDrawer,
  selectBurgerMenu,
} from "@local-store/SiteConfig";
import { BurgerMenuIcon } from "@local-components/collections/icons";

// Component style
import useStyles from "./style";
import { NavigationLinks } from "@local-components/sections/NavigationLinks";

const Toolbar = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme)();
  const dispatch = useDispatch();

  const bigScreen = useMediaQuery(theme.breakpoints.up("md"));
  const drawer = useSelector(selectDrawer);
  const showBurgerMenu = useSelector(selectBurgerMenu);

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
        <Grid item className={styles.mainSection}>
          <Box className={styles.headerContainer}>
            <Typography variant='h4' className={styles.initial}>
              A.S
            </Typography>
          </Box>
          <Grid item component={Box} my={theme.spacing(15)}>
            <NavigationLinks invert />
          </Grid>
        </Grid>
        <Box>
          {showBurgerMenu ? (
            <IconButton
              onClick={() => dispatch(openDrawer())}
              className={clsx(styles.actionButton, styles.openButton, {
                [`${styles.showActionButton}`]: !drawer,
                [`${styles.hideActionButton}`]: drawer,
              })}
            >
              <BurgerMenuIcon Width={60} />
            </IconButton>
          ) : (
            <> </>
          )}
        </Box>
      </Grid>
    </ClickAwayListener>
  );
};

export default Toolbar;
