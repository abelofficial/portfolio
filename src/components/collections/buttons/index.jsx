// Core
import { useSelector, useDispatch } from "react-redux";

// Internal
import {
  selectDarkMode,
  setDarkMode,
  turnOffDarkMode,
} from "@local-store/SiteConfig";
import { DarkModeIcon, LightModeIcon } from "@local-assets/icons";

// Material ui
import { IconButton } from "@mui/material";

export const SiteThemeSelector = ({ props }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  return (
    <>
      {darkMode ? (
        <IconButton onClick={() => dispatch(turnOffDarkMode())}>
          <LightModeIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => dispatch(setDarkMode())}>
          <DarkModeIcon />
        </IconButton>
      )}
    </>
  );
};
