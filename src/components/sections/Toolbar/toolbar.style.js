import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainSection: {
    height: '100%',
    position: 'absolute',
    zIndex: 200,
    padding: theme.spacing(2),
    width: theme.spacing(18),
    borderRadius: theme.spacing(3),
    boxShadow: theme.shadows[16],
    backgroundColor: theme.palette.primary.main,
    transition: `${theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut
    })}`
  },
  initial: {
    color: theme.palette.primary.contrastText
  },
  openButton: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
    '&:hover': {
      backgroundColor:
        theme.palette.type === 'light'
          ? theme.palette.secondary.main
          : theme.palette.primary.main
    }
  },
  closeButton: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  actionButton: {
    boxShadow: theme.shadows[16],
    padding: '0.2rem',
    position: 'absolute',
    zIndex: 100,
    top: '1rem',
    borderRadius: theme.shape.borderRadius,
    transition: `${theme.transitions.create(
      ['background-color', 'left', 'transform'],
      {
        duration: theme.transitions.duration.standard
      }
    )}`
  },

  showActionButton: {
    left: '8.8rem',
    transform: 'scale(1.2)'
  },
  hideActionButton: {
    left: '0rem',
    transform: 'scale(0.4)',
    backgroundColor: 'transparent'
  }
}));

export default useStyles;
