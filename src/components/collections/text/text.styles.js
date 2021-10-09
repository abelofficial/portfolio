import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  text: {
    transition: `${theme.transitions.create(['color'], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut
    })}`
  },
  title: {},

  sectionTitle: {},

  subSectionTitle: {},

  paragraph: {
    fontWeight: 200,
    letterSpacing: '0.2em',
    textAlign: 'justify'
  },

  highlightText: {
    display: 'inline',
    color:
      theme.palette.type === 'light'
        ? theme.palette.secondary.dark
        : theme.palette.primary.dark
  }
}));

export default useStyles;
