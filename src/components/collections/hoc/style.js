import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    borderRadius: '1rem'
  },
  pageContainer: {
    padding: theme.spacing(5),
    width: '100vw',
    minHeight: '100vh',
    margin: 'auto',
    position: 'absolute',
    zIndex: 400,
    transition: `${theme.transitions.create(
      ['filter', 'padding', 'background-color'],
      {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut
      }
    )}`,
    filter: 'blur(0)',
    '& *': {
      transition: `${theme.transitions.create(['background-color'], {
        duration: theme.transitions.duration.complex,
        easing: theme.transitions.easing.easeInOut
      })}`
    }
  },

  blur: {
    filter: 'blur(0.2rem)'
  },
  withToolbar: {
    paddingLeft: theme.spacing(22)
  }
}));

export default useStyles;
