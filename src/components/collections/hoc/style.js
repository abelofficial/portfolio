import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  greyContainer: {
    padding: theme.spacing(2),
    backgroundColor: grey[200],
    borderRadius: theme.shape.borderRadius
  },
  pageContainer: {
    padding: theme.spacing(5),
    width: '100vw',
    minHeight: '100vh',
    margin: 'auto',
    position: 'absolute',
    zIndex: 400,
    transition: `${theme.transitions.create(['filter', 'padding'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut
    })}`,
    filter: 'blur(0)'
  },

  blur: {
    filter: 'blur(0.2rem)'
  },
  withToolbar: {
    paddingLeft: theme.spacing(22)
  }
}));

export default useStyles;
