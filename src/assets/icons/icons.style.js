import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    ...theme.typography.subtitle1,
    margin: theme.spacing(1),
  },
  active: {
    color: theme.palette.secondary.main,
  },
  largeIcon: {
    ...theme.typography.h2,
  },
  normal: {
    color: theme.palette.text.primary,
  },
  invert: {
    color: "white",
  },
}));

export default useStyles;
