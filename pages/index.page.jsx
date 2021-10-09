// Core
import { NextSeo } from 'next-seo';
import clsx from 'classnames';
// Material
import { Box, Grid, Hidden, useMediaQuery, useTheme } from '@material-ui/core';

// Local
import Logo from '@local-assets/svgs/logo/image';
import AboutMe from '@local/src/components/sections/AboutMe';
import SiteConfig from '@local-components/sections/SiteConfig';
import { useOnScreen } from '@local/src/hooks/useOnScreen';

// Style
import useStyle from './index.style';
import WhatIDo from '@local/src/components/sections/WhatIDo';

export default function Home() {
  const styles = useStyle();
  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up('md'));

  const [setRef, visible] = useOnScreen({ threshold: '0.35' });

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
        alignItems={bigScreen ? 'flex-start' : 'stretch'}
      >
        <Grid item xs={12} md={7} component={Box} py={4}>
          <AboutMe />
          <WhatIDo />
        </Grid>
        <Grid item xs={12} md={4} className={clsx(styles.section)}>
          <Logo width={270} height={60} />
          <SiteConfig />
        </Grid>
      </Grid>
      <Box height="200vh" ref={setRef} />
    </Box>
  );
}
