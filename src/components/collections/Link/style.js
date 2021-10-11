import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1),
  },
  active: {
    color: theme.palette.secondary.dark,
  },
}));

export default useStyles;
