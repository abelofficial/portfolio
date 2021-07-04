import { colors, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: {
    ...theme.typography.h4,
    color: theme.palette.primary.contrastText
  },
  active: {
    color: theme.palette.secondary.main
  },
  largeIcon: {
    ...theme.typography.h2
  }
}));

export default useStyles;
