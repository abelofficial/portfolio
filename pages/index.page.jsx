// Core
import { NextSeo } from 'next-seo';

// Material
import { Box, Grid, useMediaQuery, useTheme } from '@material-ui/core';

// Local
import Welcome from '@local/src/components/sections/Welcome';
import SiteConfig from '@local-components/sections/SiteConfig';

// Style
import useStyle from './index.style';

export default function Home() {
  const styles = useStyle();
  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box>
      <NextSeo
        title="Nextjs With Material Ui"
        canonical="http://localhost/3000"
        openGraph={{
          title: 'Nextjs With Material Ui',
          url: 'http://localhost/3000'
        }}
      />

      <Grid
        container
        direction={bigScreen ? 'row' : 'column-reverse'}
        spacing={5}
        justify="space-between"
      >
        <Grid item xs={12} md={7}>
          <Welcome />
        </Grid>
        <Grid item xs={12} md={4}>
          <SiteConfig />
        </Grid>
      </Grid>
    </Box>
  );
}
