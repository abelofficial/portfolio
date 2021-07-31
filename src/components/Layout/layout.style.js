import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  page: {
    position: 'relative',
    minHeight: '100vh',
    width: '100vw',
    maxWidth: '100%'
  },
  toolbar: {
    position: 'fixed',
    zIndex: 500,
    left: '1rem',
    transition: `${theme.transitions.create(['left', 'top', 'transform'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut
    })}`,
    height: '90%'
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
  },
  main: {
    position: 'absolute',
    zIndex: 400,
    transition: `${theme.transitions.create(['filter'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut
    })}`,
    filter: 'blur(0)'
  },
  blur: {
    filter: 'blur(0.2rem)'
  }
}));

export default useStyles;
