import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    ...theme.typography.subtitle1,
    margin: theme.spacing(1),
  },
  active: {
    color:
      theme.palette.type === "dark"
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
  },
  largeIcon: {
    fontSize: "2rem",
  },
  normal: {
    color: theme.palette.text.primary,
  },
  invert: {
    color:
      theme.palette.type === "dark"
        ? theme.palette.common.black
        : theme.palette.common.white,
  },
  invertActive: {
    color:
      theme.palette.type === "dark"
        ? theme.palette.common.white
        : theme.palette.secondary.light,
  },
}));

export default useStyles;
