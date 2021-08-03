import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: theme.spacing(15),
    // padding: `${theme.spacing(2)}px`
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  animSection: {
    position: 'relative'
  },
  image: {
    position: 'absolute',
    bottom: 0,
    right: 0
  }
}));

export default useStyles;
