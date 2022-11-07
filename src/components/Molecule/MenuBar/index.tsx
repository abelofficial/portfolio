import React from "react";

// Component style
import useStyles from "./style";
import { SiteThemeSelector } from "@components/Atoms/Buttons";
import { Box } from "@mantine/core";
import NavLinks from "../NavLinks";
import SectionContainer from "../SectionContainer";

const Index = () => {
  const { classes } = useStyles();

  return (
    <SectionContainer>
      <Box className={classes.container}>
        <NavLinks invert={false} />
        <SiteThemeSelector />
      </Box>
    </SectionContainer>
  );
};

export default Index;
