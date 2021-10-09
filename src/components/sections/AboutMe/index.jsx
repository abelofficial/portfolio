// Core
import Image from 'next/image';
import clsx from 'classnames';

// Material ui
import { Grid, Typography } from '@material-ui/core';

// Local
import { SectionContainer } from '@local-components/collections/hoc';

// Component style
import useStyles from './welcome.style';

const Welcome = (props) => {
  const styles = useStyles();

  return (
    <SectionContainer component={Grid} container justifyContent="space-around">
      <Grid item xs={8} className={styles.section}>
        <Typography variant="h2" gutterBottom>
          JavaScript Developer
        </Typography>
        <Typography variant="body2" className={styles.info}>
          I am a trained Network technician and self-taught front-end web
          developer. I am a dedicated and self-motivated Javascript developer
          who specializes in{' '}
          <strong className={styles.highlight}> React </strong> for front-end
          development as well as{' '}
          <strong className={styles.highlight}> Nestjs (node) </strong> for
          backend development.
        </Typography>
      </Grid>
      <Grid item xs={3} className={clsx(styles.section, styles.animSection)}>
        <div className={styles.image}>
          <Image
            alt="welcome image"
            src="/images/no_bg.png"
            width={100}
            height={170}
            layout="intrinsic"
          />
        </div>
      </Grid>
    </SectionContainer>
  );
};

export default Welcome;
