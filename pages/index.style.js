import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {},
  section: {
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    alignSelf: 'flex-end'
  }
}));

export default useStyles;
