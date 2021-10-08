import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {},
  section: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  }
}));

export default useStyles;
