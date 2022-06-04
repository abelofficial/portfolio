import React from "react";

// Component style
import useStyles from "./style";
import { Box } from "@mantine/core";
import { LightModeIcon, DarkModeIcon } from "@components/Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDarkMode,
  turnOffDarkMode,
  setDarkMode,
} from "src/store/SiteConfig";

export const SiteThemeSelector = () => {
  const { classes } = useStyles();

  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  return (
    <>
      {darkMode ? (
        <Box onClick={() => dispatch(turnOffDarkMode())}>
          <LightModeIcon width={30} />
        </Box>
      ) : (
        <Box onClick={() => dispatch(setDarkMode())}>
          <DarkModeIcon width={30} />
        </Box>
      )}
    </>
  );
};
