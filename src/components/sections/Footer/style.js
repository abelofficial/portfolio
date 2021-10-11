import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    opacity: 0.4,
    filter: "blur(0.1rem)",
  },
}));

export default useStyles;
