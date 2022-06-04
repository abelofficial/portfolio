import React from "react";

// Component style
import useStyles from "./style";
import SectionContainer from "@hoc/SectionContainer";
import NavLinks from "@components/NavLinks";
import { SiteThemeSelector } from "@components/Buttons";
import InfoContainer from "@hoc/InfoContainer";
import { Box } from "@mantine/core";

const Index = () => {
  const { classes } = useStyles();

  return (
    <SectionContainer>
      <InfoContainer>
        <Box className={classes.container}>
          <NavLinks invert={undefined} />
          <SiteThemeSelector />
        </Box>
      </InfoContainer>
    </SectionContainer>
  );
};

export default Index;
