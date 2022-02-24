// Core

// Material ui
import { Grid, Box } from "@mui/material";

// Local
import { SectionContainer } from "@local-components/hoc";
import { SiteThemeSelector } from "@local-components/collections/buttons";
import { NavigationLinks } from "@local-components/sections/NavigationLinks";

const SiteConfig = (props) => {
  return (
    <Box width='100%' pl={5} justifyItems='flex-end'>
      <SectionContainer
        component={Grid}
        container
        alignItems='center'
        justifyContent='space-around'
      >
        <Grid item>
          <NavigationLinks direction='row' />
        </Grid>
        <Grid item>
          <SiteThemeSelector />
        </Grid>
      </SectionContainer>
    </Box>
  );
};

export default SiteConfig;
