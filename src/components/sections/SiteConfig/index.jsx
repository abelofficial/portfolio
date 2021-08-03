// Core

// Material ui
import { Grid } from '@material-ui/core';

// Local
import { SectionContainer } from '@local-components/collections/hoc';
import { SiteThemeSelector } from '@local-components/collections/buttons';

// Component style
import useStyles from './welcome.style';

const SiteConfig = (props) => {
  const styles = useStyles();

  return (
    <SectionContainer component={Grid} container justifyContent="space-around">
      <SiteThemeSelector />
    </SectionContainer>
  );
};

export default SiteConfig;
