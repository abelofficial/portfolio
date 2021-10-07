// Core
import { NextSeo } from 'next-seo';

// Material
import { Box, Grid, Hidden, useMediaQuery, useTheme } from '@material-ui/core';

// Local
import Welcome from '@local/src/components/sections/Welcome';
import SiteConfig from '@local-components/sections/SiteConfig';

// Style
import useStyle from './index.style';
import Logo from '@local/src/components/collections/Logo';

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
        justify="space-around"
      >
        <Grid item xs={12} md={7} component={Box} py={4}>
          <Welcome />
        </Grid>
        <Box
          margin={2}
          p={1}
          display="flex"
          alignItems="center"
          component={Grid}
          item
          xs={12}
          md={4}
        >
          <SiteConfig />
          <Logo />
        </Box>
      </Grid>
    </Box>
  );
}
