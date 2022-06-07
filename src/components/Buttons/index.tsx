import React from "react";

// Component style
import { Box } from "@mantine/core";
import { LightModeIcon, DarkModeIcon } from "@components/Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDarkMode,
  turnOffDarkMode,
  setDarkMode,
} from "@store/SiteConfig";

export const SiteThemeSelector = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  return (
    <>
      {darkMode ? (
        <Box onClick={() => dispatch(turnOffDarkMode())}>
          <DarkModeIcon width={30} />
        </Box>
      ) : (
        <Box onClick={() => dispatch(setDarkMode())}>
          <LightModeIcon width={30} />
        </Box>
      )}
    </>
  );
};
