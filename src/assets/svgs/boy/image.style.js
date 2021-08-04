import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  image: {
    fill: 'none',
    '& *': {
      transition: `${theme.transitions.create(['fill', 'stroke'], {
        duration: theme.transitions.duration.complex,
        easing: theme.transitions.easing.easeInOut
      })}`
    }
  },
  space: {
    fill:
      theme.palette.typen === 'light'
        ? theme.palette.primary.main
        : theme.palette.text.primary
  },
  line: {
    stroke: theme.palette.text.primary,
    strokeWidth: 1,
    strokeMiterlimit: 10
  }
}));

export default useStyles;
