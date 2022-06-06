import React from "react";

// Component style
import useStyles from "./style";
import NavLinks from "@components/NavLinks";
import { SiteThemeSelector } from "@components/Buttons";
import { Box } from "@mantine/core";
import SectionContainer from "@hoc/SectionContainer";

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
