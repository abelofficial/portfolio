// Core
import { NextSeo } from 'next-seo';

// Material
import { Box, Grid } from '@material-ui/core';

// Local
import Welcome from '@local/src/components/sections/Welcome';

// Style
import useStyle from './index.style';

export default function Home() {
  const styles = useStyle();

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

      <Grid container>
        <Grid item xs={12} md={7}>
          <Welcome />
        </Grid>
      </Grid>
    </Box>
  );
}
