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
import { SectionTitle } from '../../collections/text';
import { Paragraph } from '../../collections/text';
import { SubSectionTitle } from '../../collections/text';

const WhatIDo = (props) => {
  const styles = useStyles();
  const [setRef, visible] = useOnScreen({ threshold: '0.3' });
  let timeoutStarter = 0;

  return (
    <SectionContainer>
      <Grid
        container
        justifyContent="space-around"
        ref={setRef}
        className={styles.container}
      >
        <Grid item xs={12}>
          <SectionTitle variant="h4" gutterBottom>
            Tech stack
          </SectionTitle>
        </Grid>

        {data.map((item) => (
          <Fade key={item.title} in={visible} timeout={(timeoutStarter += 500)}>
            <Box>
              <Divider className={styles.divider} />
              <Grid
                container
                direction="column"
                alignItems="flex-start"
                className={styles.section}
              >
                <Image
                  alt={item.title + ' Image'}
                  src={item.icon}
                  width={60}
                  height={60}
                />
                <SubSectionTitle gutterBottom>{item.title}</SubSectionTitle>
                <Paragraph className={styles.content}>{item.content}</Paragraph>
              </Grid>
            </Box>
          </Fade>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default WhatIDo;
