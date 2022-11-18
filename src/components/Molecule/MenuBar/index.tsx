import React from "react";

// Component style
import useStyles from "./style";
import { Box } from "@mantine/core";
import NavLinks from "../NavLinks";
import SectionContainer from "../SectionContainer";
import SwitchableIcon from "@components/Atoms/SwitchableIcon";
import {
  selectDarkMode,
  setDarkMode,
  turnOffDarkMode,
} from "@store/SiteConfig";
import { DarkModeIcon, LightModeIcon } from "@components/Atoms/Icons";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  return (
    <SectionContainer>
      <Box className={classes.container}>
        <NavLinks invert={false} />
        <SwitchableIcon
          value={darkMode}
          setValue={
            darkMode
              ? () => dispatch(turnOffDarkMode())
              : () => dispatch(setDarkMode())
          }
          activeIcon={<DarkModeIcon width={30} />}
          inactiveIcon={<LightModeIcon width={30} />}
        />
      </Box>
    </SectionContainer>
  );
};

export default Index;
