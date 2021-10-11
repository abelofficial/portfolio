// Core
// Material ui
import { Divider, Grid, Typography } from "@material-ui/core";

// Local

// Component style
import useStyles from "./style";

const Footer = (props) => {
  const styles = useStyles();

  return (
    <Grid
      container
      direction='column'
      justifyContent='space-around'
      alignItems='center'
      className={styles.container}
      {...props}
    >
      <Divider className={styles.divider} />
      <Grid item xs={12}>
        <Typography variant='body2'>
          <small>
            Made by Abel © {new Date().getFullYear()}. As always With 💜
          </small>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
