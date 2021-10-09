import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3)
  },
  section: {
    padding: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    opacity: 0.4,
    filter: 'blur(0.1rem)'
  }
}));

export default useStyles;
