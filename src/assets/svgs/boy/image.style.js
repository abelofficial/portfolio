import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  image: {
    '& *': {
      transition: `${theme.transitions.create(['fill', 'stroke'], {
        duration: theme.transitions.duration.complex,
        easing: theme.transitions.easing.easeInOut
      })}`
    }
  }
}));

export default useStyles;
