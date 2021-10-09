import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '@keyframes blink': {
    from: {
      fillOpacity: '0.9'
    },
    to: {
      fillOpacity: '0'
    }
  },

  /* The element to apply the animation to */

  redCircle: {
    fill: theme.palette.error.main,

    animation: `$blink 1500ms ${theme.transitions.easing.easeInOut} 100ms infinite alternate-reverse`
  }
}));

export default useStyles;
