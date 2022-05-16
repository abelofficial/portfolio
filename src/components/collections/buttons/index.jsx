// Core
import { useSelector, useDispatch } from "react-redux";

// Internal
import {
  selectDarkMode,
  setDarkMode,
  turnOffDarkMode,
} from "@local-store/SiteConfig";
import {
  DarkModeIcon,
  LightModeIcon,
} from "@local-components/collections/icons";

// Material ui
import { Button, IconButton } from "@mui/material";
import useStyles from "./style";
import { useTheme } from "@mui/styles";

export const SiteThemeSelector = ({ props }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  return (
    <>
      {darkMode ? (
        <IconButton disableRipple onClick={() => dispatch(turnOffDarkMode())}>
          <LightModeIcon />
        </IconButton>
      ) : (
        <IconButton disableRipple onClick={() => dispatch(setDarkMode())}>
          <DarkModeIcon />
        </IconButton>
      )}
    </>
  );
};

export const ActionButton = ({ children, ...restProps }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();

  return (
    <Button variant='outlined' className={styles.actionButton} {...restProps}>
      {children}
    </Button>
  );
};
