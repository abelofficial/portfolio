import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  page: {
    position: 'relative',
    height: '100%',
    width: '100vw',
    maxWidth: '100%'
  },
  toolbar: {
    position: 'fixed',
    zIndex: 500,
    left: '1rem',
    height: '85%',
    minHeight: '50rem',
    transition: `${theme.transitions.create(['left', 'top', 'transform'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut
    })}`
  },
  showToolbar: {
    left: '1rem',
    top: '2rem',
    transform: 'scale(1)'
  },
  hideToolbar: {
    left: '-7.2rem',
    top: '-2rem',
    transform: 'scale(0.8)'
  }
}));

export default useStyles;
