// Core
import Image from 'next/image';
import { NextSeo } from 'next-seo';

// Material
import { Grid, Link, Container, Typography, Box } from '@material-ui/core';

export default function NotFound() {
  return (
    <Container maxWidth="md" component={Box}>
      <NextSeo
        title="Nextjs With Material Ui"
        canonical="http://localhost/3000"
        openGraph={{
          title: 'Nextjs With Material Ui',
          url: 'http://localhost/3000'
        }}
      />
      <Box minHeight="100vh" display="flex" alignItems="center">
        <Grid
          container
          alignContent="center"
          justify="center"
          direction="column"
          component={Box}
          p={4}
          boxShadow={4}
          width="100%"
        >
          <Grid item>
            <Typography variant="h1"> 404 </Typography>
          </Grid>
          <Grid item component={Box} pt={4}>
            <Typography>
              This is a boilerplate for{' '}
              <Link href="https://nextjs.org/">Nextjs</Link> with{' '}
              <Link href="https://material-ui.com/">Material-UI.</Link>
            </Typography>
            <Link href="https://github.com/abelofficial/Nextjs-Material-ui-boilerplate">
              <em>See Heres</em>
            </Link>
          </Grid>
          <Grid item>
            <Image
              alt="Material ui with Next"
              src="/material-vs-next.svg"
              width={400}
              height={400}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
