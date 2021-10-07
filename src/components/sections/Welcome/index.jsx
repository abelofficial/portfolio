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
      <Grid item xs={7} className={styles.section}>
        <Typography variant="h2"> Hello Friend</Typography>
        <Typography variant="body1">
          Welcome to my personal workspace
        </Typography>
      </Grid>
      <Grid item xs={4} className={clsx(styles.section, styles.animSection)}>
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
