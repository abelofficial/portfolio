// Core
import { NextSeo } from "next-seo";

// Material
import { Grid, Container, Typography, Box } from "@mui/material";

export default function NotFound() {
  return (
    <Container maxWidth='md' component={Box}>
      <NextSeo title='Abel Sintaro - Not found' />
      <Box minHeight='100vh' display='flex' alignItems='center'>
        <Grid
          container
          alignContent='center'
          justify='center'
          direction='column'
          component={Box}
          p={4}
          boxShadow={4}
          width='100%'
        >
          <Grid item>
            <Typography variant='h1'> 404 </Typography>
          </Grid>
          <Grid item component={Box} pt={4}>
            <Typography>Page could not e located</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
