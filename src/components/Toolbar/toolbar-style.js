import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    padding: theme.spacing(2),
    width: theme.spacing(18),
    borderRadius: theme.spacing(3),
    boxShadow: theme.shadows[16],
    backgroundColor: theme.palette.primary.dark
  },
  icon: {
    fontSize: '3rem'
  }
}));

export default useStyles;
