// Core

// Material ui
import { Grid, Box } from "@mui/material";

// Local
import { SectionContainer } from "@local/src/components/hoc";
import { SiteThemeSelector } from "@local-components/collections/buttons";
import { NavigationLinks } from "@local-components/collections/Link";

const SiteConfig = (props) => {
  return (
    <Box width='100%' pl={5} justifyItems='flex-end'>
      <SectionContainer
        component={Grid}
        container
        alignItems='center'
        justifyContent='space-between'
      >
        <Grid item xs={10}>
          <NavigationLinks direction='row' />
        </Grid>
        <Grid item xs={2}>
          <SiteThemeSelector />
        </Grid>
      </SectionContainer>
    </Box>
  );
};

export default SiteConfig;
