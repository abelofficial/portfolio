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
import { IconButton } from "@mui/material";

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
