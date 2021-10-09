import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  contactLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  title: {
    padding: theme.spacing(2)
  }
}));

export default useStyles;
