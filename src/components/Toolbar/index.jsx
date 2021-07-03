// Core
import { Grid, IconButton, Typography } from '@material-ui/core';
import {
  HomeIcon,
  EducationIcon,
  BlogIcon,
  MessageIcon,
  SettingIcon,
  LogInIcon
} from '@local-components/Icons';

// Component style
import useStyles from './toolbar-style';

const Toolbar = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      justify="space-between"
      className={classes.container}
    >
      <Typography color="textSecondary" variant="h1">
        A.S
      </Typography>

      <Grid item>
        <Grid container direction="column" alignContent="center">
          <IconButton>
            <HomeIcon isActive />
          </IconButton>
          <IconButton>
            <EducationIcon />
          </IconButton>
          <IconButton>
            <BlogIcon />
          </IconButton>
          <IconButton>
            <MessageIcon />
          </IconButton>
          <IconButton>
            <SettingIcon />
          </IconButton>
        </Grid>
      </Grid>
      <IconButton>
        <LogInIcon />
      </IconButton>
    </Grid>
  );
};

export default Toolbar;
