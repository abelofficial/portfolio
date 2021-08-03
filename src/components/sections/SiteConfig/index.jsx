// Core

// Material ui
import { Grid } from '@material-ui/core';

// Local
import { GreyContainer } from '@local-components/collections/hoc';
import { SiteThemeSelector } from '@local-components/collections/buttons';

// Component style
import useStyles from './welcome.style';

const SiteConfig = (props) => {
  const styles = useStyles();

  return (
    <GreyContainer component={Grid} container justifyContent="space-around">
      <SiteThemeSelector />
    </GreyContainer>
  );
};

export default SiteConfig;
