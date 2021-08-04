// Core
import Image from 'next/image';
import clsx from 'classnames';

// Material ui
import { Grid, Typography } from '@material-ui/core';

// Local
import { SectionContainer } from '@local-components/collections/hoc';
import { BoySvg } from '@local-assets/svgs';

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
          <BoySvg
            alt="welcome image"
            src="/images/boy.svg"
            width={150}
            height={150}
            layout="fixed"
          />
        </div>
      </Grid>
    </SectionContainer>
  );
};

export default Welcome;
