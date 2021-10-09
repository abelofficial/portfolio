// Core
import Image from 'next/image';
import clsx from 'classnames';

// Material ui
import { Box, Divider, Fade, Grid, Typography } from '@material-ui/core';

// Local
import { SectionContainer } from '@local-components/collections/hoc';

// Component
import data from './data.json';
import useStyles from './whatIDo.style';
import { useOnScreen } from '@local/src/hooks/useOnScreen';

const WhatIDo = (props) => {
  const styles = useStyles();
  const [setRef, visible] = useOnScreen({ threshold: '0.3' });
  let timeoutStarter = 0;

  return (
    <SectionContainer>
      <Grid container justifyContent="space-around" ref={setRef}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Tech stack
          </Typography>
        </Grid>

        {data.map((item) => (
          <Fade key={item.title} in={visible} timeout={(timeoutStarter += 500)}>
            <Box>
              <Divider className={styles.divider} />
              <Grid
                container
                direction="column"
                alignItems="flex-start"
                className={styles.container}
              >
                <Image
                  alt={item.title + ' Image'}
                  src={item.icon}
                  width={60}
                  height={60}
                />
                <Typography variant="h6" gutterBottom>
                  {item.title}{' '}
                </Typography>
                <Typography variant="body1" className={styles.content}>
                  {item.content}{' '}
                </Typography>
              </Grid>
            </Box>
          </Fade>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default WhatIDo;
