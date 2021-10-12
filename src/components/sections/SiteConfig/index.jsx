// Core

// Material ui
import { Grid } from "@material-ui/core";

// Local
import { SectionContainer } from "@local/src/components/hoc";
import { SiteThemeSelector } from "@local-components/collections/buttons";

// Component style
import useStyles from "./welcome.style";
import { NavigationLinks } from "../../collections/Link";

const SiteConfig = (props) => {
  const styles = useStyles();

  return (
    <SectionContainer
      component={Grid}
      container
      alignItems='center'
      justifyContent='space-around'
    >
      <Grid item xs={9}>
        <NavigationLinks direction='row' />
      </Grid>
      <Grid item xs={3}>
        <SiteThemeSelector />
      </Grid>
    </SectionContainer>
  );
};

export default SiteConfig;
