// Core
import Image from 'next/image';
import clsx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

// Material ui
import { Grid, Typography } from '@material-ui/core';

// Local
import { GreyContainer } from '@local-components/collections/hoc';

// Component style
import useStyles from './welcome.style';

const Welcome = (props) => {
  const styles = useStyles();

  return (
    <GreyContainer component={Grid} container justifyContent="space-around">
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
            src="/images/boy.svg"
            width={150}
            height={150}
            layout="fixed"
          />
        </div>
      </Grid>
    </GreyContainer>
  );
};

export default Welcome;
